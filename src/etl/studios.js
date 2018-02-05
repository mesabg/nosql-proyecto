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
const studioCollection = mongoose.connection.collection('studio');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Studio] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading studios...");
        let statements = [];

        //-- Query each studio
        let studiosCursor = studioCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    name: "$name"
                }
            }
        ]);
        let studio = null;
        await Neo4j.runStatement(`CREATE INDEX ON :Studio(_id)`);
        await Neo4j.runStatement(`CREATE INDEX ON :Studio(name)`);
        for(let i=1; (studio = await studiosCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving studio [%s - %d]", i, studio.name, studio._id);
            statements.push(`(studio_${studio._id}:Studio ${parseCypher(studio)})`);
            await Neo4j.runStatement(`CREATE (:Studio ${parseCypher(studio)})`);
        }
        
        console.log("[ETL] - Studios loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {studios-etl} - attributes");
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
        console.log("[ETL] - Loading studio relations...");
        let statements = [];

        //-- has_movie relation
        let studiosCursor = studioCollection.aggregate([
            {
                $unwind: "$has_movie"
            },
            {
                $project: {
                    _id: 1,
                    movie_id: "$has_movie"
                }
            }
        ]);
        let studio = null;
        for(let i=1; (studio = await studiosCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving studio(has_movie) [%d - %d]", i, studio._id, studio.movie_id);
            statements.push(`(studio_${studio._id})-[:HAS_MOVIE]->(movie_${studio.movie_id})`);
            await Neo4j.runStatement(`
                MATCH (studio:Studio {_id: ${studio._id}}), (movie:Movie {_id: ${studio.movie_id}})
                CREATE (studio)-[:HAS_MOVIE]->(movie)`);
        }


        //-- has_state relation
        studiosCursor = studioCollection.aggregate([
            {
                $match: { has_state: { $ne: null } }
            },
            {
                $project: {
                    _id: 1,
                    state_id: "$has_state"
                }
            }
        ]);
        studio = null;
        for(let i=1; (studio = await studiosCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving studio(has_state) [%d - %d]", i, studio._id, studio.state_id);
            statements.push(`(studio_${studio._id})-[:HAS_STATE]->(state_${studio.state_id})`);
            await Neo4j.runStatement(`
                MATCH (studio:Studio {_id: ${studio._id}}), (state:State {_id: ${studio.state_id}})
                CREATE (studio)-[:HAS_STATE]->(state)`);
        }

        
        console.log("[ETL] - State relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {states-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};