
// Mostrar las películas dado uno o varios géneros
// Supongamos ['Animation', 'Family']
MATCH (movie:Movie) 
WHERE ANY (x IN ['Animation', 'Family'] WHERE x IN movie.genre) 
RETURN movie


// Mostrar película con mayor duración dada una clasificación
// Supongamos clasificación 'PG'
MATCH (movie:Movie) 
WHERE movie.clasification = 'PG'
WITH toInteger(movie.running_time) AS values
WITH max(values) AS maximum
MATCH node = (movie:Movie {running_time: toString(maximum)})
RETURN node