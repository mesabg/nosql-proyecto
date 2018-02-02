/**
 * ETL - from mongo to neo4j
 */

/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Neo4j = require('../neo4j');

/**
 * Local dependencies
 */
const directorCollection = mongoose.connection.collection('director');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Director] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading directors...");
        let statements = [];

        //-- Query each director
        let directorsCursor = directorCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    name: "$name"
                }
            }
        ]);
        let director = null;
        await Neo4j.runStatement(`CREATE INDEX ON :Director(_id))`);
        for(let i=1; (director = await directorsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving director [%s - %d]", i, director.name, director._id);
            statements.push(`(director_${director._id}:Director ${parseCypher(director)})`);
            await Neo4j.runStatement(`CREATE (:Director ${parseCypher(director)})`);
        }
        
        console.log("[ETL] - Directors loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {directors-etl} - attributes");
        console.log("Details :: ", reason);
        return [];
    }
}



/**
 * Inject Relations
 * - It creates edges
 */
async function relations(){
    try {
        console.log("[ETL] - Loading director relations...");
        let statements = [];

        //-- directed_id relation
        let directorsCursor = directorCollection.aggregate([
            {
                $unwind: "$directed_in"
            },
            {
                $project: {
                    _id: 1,
                    movie_id: "$directed_in"
                }
            }
        ]);
        let director = null;
        for(let i=1; (director = await directorsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving director(directed_in) [%d - %d]", i, director._id, director.movie_id);
            statements.push(`(director_${director._id})-[:DIRECTED_IN]->(movie_${director.movie_id})`);
            await Neo4j.runStatement(`
                MATCH (director:Director {_id: '${director._id}'}), (movie:Movie {_id: '${director.movie_id}'})
                CREATE (director)-[:DIRECTED_IN]->(movie)`);
        }
        
        console.log("[ETL] - Director relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {directors-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};