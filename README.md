# **Laboratorio #2 (MongoDB)**  ![alt text][logo]
### Autor: Moisés Berenguer
### CI: V24700980
### Materia: Bases de datos NoSQL
---

#### Referente a la carga de los datos :+1:
1. Se realizó un pequeño proyecto en nodejs para agilizar la carga y tener más documentos con los cuales hacer las respectivas consultas
2. Para correr el proyecto, es cuestión de cambiar los valores de las variables de entorno (.env) de ambas BD (MySQL => Source, MongoDB => destination)
3. Instalar los modulos de node (**npm install**)
4. Correr el script **npm start**
5. La operaciones utilizadas fueron: inserción común y actualización de un documento:

```javascript
db.collection.insert( document )
db.collection.findOneAndUpdate(query, update)
```
6. NOTA: Se insertaron un límite de 200 registros por tabla del esquema en SQL

#### Referente al modelo de datos
El modelo utilizado fue el siguiente:

```javascript
//-- Usando el esquema referenciado para relaciones N:N
//-- N departments <=> N employees
department: {
    no: String,
    name: String,
    employees: [{
        employee_no: Number,
        from: Date,
        to: Date
    }],
    managers: [{
        employee_no: Number,
        from: Date,
        to: Date
    }]
}

//-- Utilizando el esquema referenciado para relaciones 1:N
//-- 1 employee => N titles, N Salaries
employee: {
    no: Number,
    birthdate: Date,
    first_name: String,
    last_name: String,
    gender: String,
    hire_date: Date,
    salaries: [Date],
    titles: [String]
}


salary: {
    from: Date,
    to: Date,
    salary: Number
}


title: {
    from: Date,
    to: Date,
    title: String
}
```


#### Referente a los queries
Todas las consultas se encuentran en orden en el archivo **queries.js** puede ser ejecutado en mongo sin problema, Las salidas de cada uno se encuentra en los archivos adentro de la carpeta salida

1. Todos los empleados contratados entre 1985 y 1990
```javascript
//-- Query I
/**
 * Buscamos el grupo de empleados que hayan sido contratados entre el 1/1/1985 y el 31/12/1990 (inclusive), por ello usamos: greater than or equal (qte) && less than or equal (lte)
 */
db.employee.find({
    "hire_date": {
        $gte: new Date(1985, 1, 1, 0, 0, 0, 0),
        $lte: new Date(1990, 12, 31, 0, 0, 0, 0)
    }
});
```
![alt text][Q1]


2. Todos los empleados del sexo femenino con salario mayor a 12000
```javascript
//-- Query II
/**
 * Se utilizó una función agreggate para obtener el resultado, de la siguente manera:
 * 
 * 1. Se hace match con todos los empleados de sexo femenino
 * 2. Se generan cada una de las entradas del arreglo de salarios en entradas diferentes. Ej:
 * 
 * { _id: ObjectId(1), data: [1, 2, 3, 4] }
 * produces ::
 * { _id: ObjectId(1), data: 1 }
 * { _id: ObjectId(1), data: 2 }
 * { _id: ObjectId(1), data: 3 }
 * { _id: ObjectId(1), data: 4 }
 * 
 * 2. ordenamos los salarios de menor a mayor (recordemos que el arreglo salaries, contiene fechas => así se describía en el modelo relacional planteado en el enunciado)
 * 
 * 3. Buscamos la ultima fecha por cada empleado, básicamente el salario que gana un empleado es el último cronologicamente, los anteriores a ese no cuentan.
 * 
 * 4. Simulamos un "join" con el uso de "lookup" y el documento salario
 * 
 * 5 Por ultimo filtramos los salarios mayores a 12000 
 */
db.employee.aggregate([
    { 
        $match: { gender: "F" } 
    },
    { 
        $unwind: "$salaries" 
    },
    {
        $sort: { salaries: 1 }
    },
    {
        $group: {
            _id: "$_id",
            no: { $first: "$no" },
            birthdate: { $first: "$birthdate" },
            first_name: { $first: "$first_name" },
            last_name: { $first: "$last_name" },
            gender: { $first: "$gender" },
            hire_date: { $first: "$hire_date" },
            titles: { $first: "$titles" },
            salary_id: { $last: "$salaries" }
        }
    },
    {
        $lookup: {
            from: "salary",
            localField: "salary_id",
            foreignField: "from",
            as: "salary"
        }
    },
    { 
        $unwind: "$salary" 
    },
    {
        $project: {
            no: 1,
            birthdate: 1,
            first_name: 1,
            last_name: 1,
            gender: 1,
            hire_date: 1,
            titles: 1,
            salary: 1
        }
    },
    {
        $match: { "salary.salary": { $gt:12000 } }
    }
]);
```
![alt text][Q2]



3. Cantidad de empleados de sexo Masculino
```javascript
//-- Query III
/**
 * Simplemente se seleccionan los empleados de género másculino y los contamos haciendo uso de la función count
 */
db.employee.find({ gender: 'M' }).count();
```
![alt text][Q3]



4. Número de empleados por cada departamento
```javascript
//-- Query IV
/**
 * Por cada departamento, contamos la cantidad de empleados en dicho departamento, la propiedad employees dentro de department alberga un arreglo con los id de los empleados de ese departamento; por ende es cuestión de contar la longitud de dicho arreglo.
 * 
 * Para ello usamos un aggregate y la función $size que retorna el tamaño de un arreglo (length)
 */
db.department.aggregate([
    {
        $project: { 
            _id: 0,
            no: 1,
            name: 1,
            n_employees: { $size:"$employees" }
        }
    }
]);
```
![alt text][Q4]

5. Empleados cuyo título es “Senior Staff”, que su nombre contenga la letra ‘a’ y hayan trabajado
en al menos dos departamentos.
```javascript
//-- Query V
/**
 * 1. Empezamos buscando todos los empleados en cada departamento.
 * 
 * 2. Traemos cada empleado usando lookup y los separamos en entradaas diferentes usando unwind.
 * 
 * 3. verificamos la condición dada, que tenga título "Senior Staff" y nombre con almenos una letra "a".
 * 
 * 4. Agrupamos por cada empleado y contamos ($sum: 1) el número de departamentos en los cuales cada empleado ha estado. Básicamente aquí obtenemos la información de los empleados y adicionalmente una entrada "count" que nos especifíca en cuantos departamentos ha trabajado.
 * 
 * 5. Filtramos con $match de manera tal que ese contador sea mayor o igual a 2
 * 
 * 6. Proyectamos para no incluir el contador en la salida final
 */
db.department.aggregate([
    {
        $unwind: "$employees"
    },
    {
        $lookup: {
            from: "employee",
            localField: "employees.employee_no",
            foreignField: "no",
            as: "employee"
        }
    },
    {
        $unwind: "$employee"
    },
    {
        $match: { 
            "employee.titles": { $in: ["Senior Staff"] },
            "employee.first_name": /a/ 
        }
    },
    {
        $group: {
            _id: "$employee._id",
            no: { $first: "$employee.no" },
            birthdate: { $first: "$employee.birthdate" },
            first_name: { $first: "$employee.first_name" },
            last_name: { $first: "$employee.last_name" },
            gender: { $first: "$employee.gender" },
            hire_date: { $first: "$employee.hire_date" },
            titles: { $first: "$employee.titles" },
            departments: { $push: "$name" },
            count: { $sum: 1 }
        }
    },
    {
        $match: { count: { $gte:2 } }
    },
    {
        $project: {
            no: 1,
            birthdate: 1,
            first_name: 1,
            last_name: 1,
            gender: 1,
            hire_date: 1,
            titles: 1,
            departments: 1
        }
    }
]);
```
![alt text][Q5]
![alt text][Q51]


[logo]: https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png "MongoDB"

[Q1]: images/Q1.png
[Q2]: images/Q2.png
[Q3]: images/Q3.png
[Q4]: images/Q4.png
[Q5]: images/Q5.png
[Q6]: images/Q6.png
[Q7]: images/Q7.png
[Q8]: images/Q8.png