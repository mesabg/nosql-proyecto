
// 1. Mostrar las películas dado uno o varios géneros
// Supongamos ['Animation', 'Family']
MATCH (movie:Movie) 
WHERE ANY (x IN ['Animation', 'Family'] WHERE x IN movie.genre) 
RETURN movie


// 2. Mostrar película con mayor duración dada una clasificación
// Supongamos clasificación 'PG'
MATCH (movie:Movie) 
WHERE movie.clasification = 'PG'
WITH movie.running_time AS running_time, movie._id AS movie_id
ORDER BY running_time DESC
LIMIT 1
MATCH (movie:Movie {_id:movie_id})
RETURN movie


// 3. Cantidad de kilometros recorridos para poder conseguir todas las películas que cumplan con una clasificación
// Supongamos clasificación 'G'
MATCH relation = (movie:Movie {clasification: 'G'})-[:CREATED_IN]->(studio:Studio)-[:HAS_STATE]-(state:State)
MATCH data = (state)-[:NEXT_TO]->(:State)
WITH relationships(data) as reduc
WITH reduce(distance = 0, next_to IN reduc | distance + next_to.distance) AS distance
RETURN distance ORDER BY distance ASC LIMIT 1


// 4. Distancia más corta entre una película y una filial
// Supongamos película "Honey, I Shrunk the Kids" y la Filial(studio) "Kushner-Locke Company"
MATCH (movie:Movie {name: 'Honey, I Shrunk the Kids'}), (studio:Studio {name: 'Kushner-Locke Company'})
RETURN shortestPath((movie)-[*]->(studio))


// 5. Dada una ubicación y una película o una filial(studio), mostrar los estados más cercanos a esta
// Supongamos estado "Lara" y la película "Herbie Goes Bananas"
MATCH (estado1:State), (estado2:State), (f:Studio{name:'Walt Disney Feature Animation'}), (m:Movie{name:'Oliver and Company'})
MATCH p=(estado1)-[:NEXT_TO]->(estado2)
WHERE (f)-[:HAS_STATE]->(estado1) OR (f)-[:HAS_STATE]->(estado2) OR (m)-[:CREATED_IN]->(f) AND ((f)-[:HAS_STATE]->(estado1) OR (f)-[:HAS_STATE]->(estado2))
WITH p,reduce(s = 0, r IN relationships(p) | s + r.distance) AS dist
RETURN p, dist ORDER BY dist ASC
LIMIT 1