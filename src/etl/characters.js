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
const characterCollection = mongoose.connection.collection('character');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Character] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading characters...");
        let statements = [];

        //-- Query each character
        let charactersCursor = characterCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    data: {
                        name: "$name"
                    } 
                }
            }
        ]);
        let character = null;
        for(let i=1; (character = await charactersCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving category [%s - %d]", i, character.data.name, character._id);
            statements.push(`(character_${character._id}:Character ${parseCypher(character.data)})`);
        }
        
        console.log("[ETL] - Characters loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {characters-etl} - attributes");
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
        console.log("[ETL] - Loading character relations...");
        let statements = [];

        //-- appear_in relation
        let charactersCursor = characterCollection.aggregate([
            {
                $unwind: "$appear_in"
            },
            {
                $project: {
                    _id: 1,
                    movie_id: "$appear_in"
                }
            }
        ]);
        let character = null;
        for(let i=1; (character = await charactersCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving character(appear_in) [%d - %d]", i, character._id, character.movie_id);
            statements.push(`(character_${character._id})-[:APPEAR_IN]->(movie_${character.movie_id})`);
        }


        //-- personified_by relation
        charactersCursor = characterCollection.aggregate([
            {
                $unwind: "$personified_by"
            },
            {
                $project: {
                    _id: 1,
                    actor_id: "$personified_by"
                }
            }
        ]);
        character = null;
        for(let i=1; (character = await charactersCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving character(personified_by) [%d - %d]", i, character._id, character.actor_id);
            statements.push(`(character_${character._id})-[:PERSONIFIED_BY]->(actor_${character.actor_id})`);
        }
        
        console.log("[ETL] - Characters relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {characters-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};