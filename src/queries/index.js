/**
 * Queries written here
 */


/**
 * 1. Cantidad de películas dado un director
 * Suponemos :: 'Vincent McEveety'
 */
db.director.aggregate([
    {
        $match: { name: 'Vincent McEveety' }
    },
    {
        $project: {
            _id: 0,
            name: 1,
            amount_of_movies: { $size: "$directed_in" }
        }
    }
]);


/**
 * 2. Películas que sean de uno o más géneros dados (Drama,Comedia, Animación...)
 * Suponemos 3 géneros ['Adventure', 'Fantasy', 'Comedy'], y buscamos que el genero de la película
 * coincida con alguna de la de los géneros dados
 */
db.movie.aggregate([
    {
        $match: { genre: { $in:['Adventure', 'Fantasy', 'Comedy'] } }
    }
]);



/**
 * 3. Dado un rango (N, M) mostrar las películas que se encuentren en ese ranking según IMDB.
 * - Dado que el rango está en inglés, tenemos los siguientes valores: ['G', 'PG', 'PG-13', 'R', 'NC-17']
 * - Seleccionemos entre 1 y 3; ['G', 'PG', 'PG-13']  => ['A', 'B']
 */
db.movie.aggregate([
    {
        $match: { rating: { $in:['G', 'PG', 'PG-13'] } }
    }
]);



/**
 * 4. Ordenar de manera ascendente los directores y la cantidad de dinero recaudado según sus películas dirigidas
 */
db.movie.aggregate([
    {
        $unwind: "$directed_by"
    },
    {
        $lookup: {
            from: 'director',
            localField: 'directed_by',
            foreignField: '_id',
            as: 'director'
        }
    },
    {
        $unwind: "$director"
    },
    {
        $project: {
            _id: 0,
            gross: 1,
            director_id: "$director._id",
            director_name: "$director.name",
            movie: "$name.original"
        }
    },
    {
        $group : {
            _id : "$director_id",
            name: { $first: "$director_name" },
            movies: { $push: "$movie" },
            profit: { $sum: "$gross" }
        }
    },
    {
        $sort: { name:1, profit:1 }
    }
]);



 /**
 * 5. Dado un año YYYY mostrar las películas estrenadas ese año 
 * - Supongamos 1980
 */
db.movie.aggregate([
    {
        $project: {
            _id: 1,
            name: 1,
            rating: 1,
            studio: 1,
            distributor: 1,
            saga: 1,
            release: 1,
            year: { $year:"$release" },
            genre: 1,
            running_time: 1,
            gross: 1
        }
    },
    {
        $match: { year:1980 }
    }
]);



/**
 * 6. De existir una saga. Mostrar las películas asociadas.
 */
db.movie.aggregate([
    {
        $match: { saga: { $nin: ['N/A'] } }
    },
    {
        $project: {
            _id: 1,
            name: 1,
            rating: 1,
            studio: 1,
            distributor: 1,
            saga: 1,
            release: 1,
            genre: 1,
            running_time: 1,
            gross: 1
        }
    }
]);




/**
 * 7. Mostrar el año con mayores fondos recaudados.
 */
db.movie.aggregate([
    {
        $project: {
            year: { $year:"$release" },
            gross: 1
        }
    },
    {
        $group : {
            _id : "$year",
            profit: { $sum: "$gross" }
        }
    },
    {
        $sort: { profit:-1 }
    },
    {
        $limit: 1
    }
]);


/**
 * 8. Dado un año mostrar la película con mayor duración de ese año.
 * - Supongamos 1980
 */
db.movie.aggregate([
    {
        $project: {
            _id: 1,
            name: 1,
            rating: 1,
            studio: 1,
            distributor: 1,
            saga: 1,
            release: 1,
            year: { $year:"$release" },
            genre: 1,
            running_time: 1,
            gross: 1
        }
    },
    {
        $match: { year:1980 }
    },
    {
        $sort: { running_time:-1 }
    },
    {
        $limit: 1
    }
]);
