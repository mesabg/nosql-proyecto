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
const awardCollection = mongoose.connection.collection('award');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Award] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading awards...");
        let statements = [];

        //-- Query each award
        let awardsCursor = awardCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    name: "$name" 
                }
            }
        ]);
        let award = null;
        await Neo4j.runStatement(`CREATE INDEX ON :Award(_id)`);
        await Neo4j.runStatement(`CREATE INDEX ON :Award(name)`);
        for(let i=1; (award = await awardsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving award [%s - %d]", i, award.name, award._id);
            statements.push(`(award_${award._id}:Award ${parseCypher(award)})`);
            await Neo4j.runStatement(`CREATE (:Award ${parseCypher(award)})`);
        }
        
        console.log("[ETL] - Awards loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {awards-etl} - attributes");
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

        //-- has_category relation
        let awardsCursor = awardCollection.aggregate([
            {
                $unwind: "$has_category"
            },
            {
                $project: {
                    _id: 1,
                    category_id: "$has_category"
                }
            }
        ]);
        let award = null;
        for(let i=1; (award = await awardsCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving award(has_category) [%d - %d]", i, award._id, award.category_id);
            statements.push(`(award_${award._id})-[:HAS_CATEGORY]->(category_${award.category_id})`);
            await Neo4j.runStatement(`
                MATCH (award:Award {_id: ${award._id}}), (category:Category {_id: ${award.category_id}})
                CREATE (award)-[:HAS_CATEGORY]->(category)`);
        }
        
        console.log("[ETL] - Actor relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {awards-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};