# **Proyecto Fase #I (MongoDB)**  ![alt text][logo]
### Autores: 
### Moisés Berenguer  |  CI: V24700980
### Leonel Gonzalez  |  CI: V19175379
### Eleazar Rojas  |  CI: V12715403
### Materia: Bases de datos NoSQL
---

#### Referente a la carga de los datos :+1:
1. Se realizó un pequeño proyecto en nodejs para agilizar la carga de datos
2. Para correr el proyecto, es cuestión de crear un archivo llamado (.env) y copiar allí los datos de acceso de la DB que se encuentran en el archivo de ejemplo (.env.example)
4. La instancia de DB se encuentra en MLab, por ende el servidor esta activo siempre y puede ser accedido desde robomongo con las credenciales del archivo .env.example
3. Instalar los modulos de node (**npm install**)
4. Correr el script **npm start**
5. La operaciones utilizadas fueron: inserción común:

```javascript
db.collection('actor').save(actor);
```
6. NOTA: Se insertaron todos los registros referentes a la década de 1980

#### Referente al modelo de datos
El modelo utilizado fue el siguiente:

```javascript
//-- ACTOR
//-- Usando el esquema referenciado para relaciones N:N
actor: {
    _id:Number,
    name:String,
    acted_in:[Number],
    personifies:[Number]
}
//-- Logica usada: Saber en que peliculas ha actuado un actor y que papeles a representado



//-- CHARACTER
//-- Usando el esquema referenciado para relaciones N:N
character: {
    _id:Number,
    name:String,
    appear_in:[Number],
    personified_by:[Number]
}
//-- Logica usada: Saber en en que peliculas ha aparecido un personaje y quien a actuado a ese personaje


//-- DIRECTOR
//-- Usando el esquema referenciado para relaciones N:N
director: {
    _id:Number,
    name:String,
    directed_in:[Number]
}
//-- Logica usada: Saber que peliculas ha dirigido un director


//-- AWARD
//-- Usando el esquema referenciado para relaciones N:N
award: {
    _id:Number,
    name:String,
    has_category:[Number]
}
//-- Logica usada: Saber que categorias tiene un premio


//-- CATEGORY
//-- Usando el esquema referenciado para relaciones N:N
category: {
    _id:Number,
    name:String,
    present_in:[Number]
}
//-- Logica usada: Aber a que premios pertenece una categoria


//-- MOVIE
//-- Usando el esquema referenciado para relaciones N:N
movie: {
    _id:Number,
    name: {
        spanish:String,
        original:String,
    }
    clasification:String,
    rating:Number,
    studio:String,
    distributor:String,
    saga:String,
    release:Date,
    genre:[String],
    running_time:Number,
    gross:Number,
    preceded_by:Number,
    personified_by:[{
        actor_id:Number,
        character_id:Number,
        role:String
    }],
    directed_by:[Number],
    nominated_in:[{
        award_id:Number,
        category_id:Number,
        won:Boolean
    }]
}
//-- Logica usada: 
//-- Saber las peliculas que preceden
//-- Saber los personajes y actores
//-- Saber quien la ha dirigido
//-- Saber las nominaciones que tiene

```


#### Referente a los queries
Todas las consultas se encuentran en orden en el archivo **src/queries/index.js** puede ser ejecutado en mongo sin problema, Las salidas de cada uno se encuentra en los archivos adentro de la carpeta "images"

1. 
![alt text][Q1]
---

2. 
![alt text][Q2]
---

3. 
![alt text][Q3]
---

4. 
![alt text][Q4]
---

5. 
![alt text][Q5]
---

6. 
![alt text][Q6]
---

7. 
![alt text][Q7]
---

8. 
![alt text][Q8]
---


[logo]: https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png "MongoDB"

[Q1]: images/Q1.png
[Q2]: images/Q2.png
[Q3]: images/Q3.png
[Q4]: images/Q4.png
[Q5]: images/Q5.png
[Q6]: images/Q6.png
[Q7]: images/Q7.png
[Q8]: images/Q8.png