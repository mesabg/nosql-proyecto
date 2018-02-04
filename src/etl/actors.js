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
const actorCollection = mongoose.connection.collection('actor');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Actor] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading actors...");

        //-- Query each actor
        let actorsCursor = actorCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    name: "$name"
                }
            }
        ]);
        let actor = null;
        let statements = [];
        await Neo4j.runStatement(`CREATE INDEX ON :Actor(_id)`);
        await Neo4j.runStatement(`CREATE INDEX ON :Actor(name)`);
        for(let i=1; (actor = await actorsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving actor [%s - %d]", i, actor.name, actor._id);
            statements.push(`(actor_${actor._id}:Actor ${parseCypher(actor)})`);
            await Neo4j.runStatement(`CREATE (:Actor ${parseCypher(actor)})`);
        }
        
        console.log("[ETL] - Actors loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {actors-etl} - attributes");
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
        console.log("[ETL] - Loading actor relations...");
        let statements = [];

        //-- acted_in relation
        let actorsCursor = actorCollection.aggregate([
            {
                $unwind: "$acted_in"
            },
            {
                $project: {
                    _id: 1,
                    movie_id: "$acted_in"
                }
            }
        ]);
        let actor = null;
        for(let i=1; (actor = await actorsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving actor(acted_in) [%d - %d]", i, actor._id, actor.movie_id);
            statements.push(`(actor_${actor._id})-[:ACTED_IN]->(movie_${actor.movie_id})`);
            await Neo4j.runStatement(`
                MATCH (actor:Actor {_id: '${actor._id}'}), (movie:Movie {_id: '${actor.movie_id}'})
                CREATE (actor)-[:ACTED_IN]->(movie)`);
        }


        //-- personifies relation
        actorsCursor = actorCollection.aggregate([
            {
                $unwind: "$personifies"
            },
            {
                $project: {
                    _id: 1,
                    character_id: "$personifies"
                }
            }
        ]);
        actor = null;
        for(let i=1; (actor = await actorsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving actor(personifies) [%d - %d]", i, actor._id, actor.character_id);
            statements.push(`(actor_${actor._id})-[:PERSONIFIES]->(character_${actor.character_id})`);
            await Neo4j.runStatement(`
                MATCH (actor:Actor {_id: '${actor._id}'}), (character:Character {_id: '${actor.character_id}'})
                CREATE (actor)-[:PERSONIFIES]->(character)`);
        }
        
        console.log("[ETL] - Actor relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {actors-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};