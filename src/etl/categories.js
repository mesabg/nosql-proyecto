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
const categoryCollection = mongoose.connection.collection('category');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Category] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading categories...");
        let statements = [];

        //-- Query each category
        let categoriesCursor = categoryCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    name: "$name"
                }
            }
        ]);
        let category = null;
        await Neo4j.runStatement(`CREATE INDEX ON :Category(_id)`);
        await Neo4j.runStatement(`CREATE INDEX ON :Category(name)`);
        for(let i=1; (category = await categoriesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving category [%s - %d]", i, category.name, category._id);
            statements.push(`(category_${category._id}:Category ${parseCypher(category)})`);
            await Neo4j.runStatement(`CREATE (:Category ${parseCypher(category)})`);
        }
        
        console.log("[ETL] - Categories loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {categories-etl} - attributes");
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
        console.log("[ETL] - Loading category relations...");
        let statements = [];

        //-- present_in relation
        let categoriesCursor = categoryCollection.aggregate([
            {
                $unwind: "$present_in"
            },
            {
                $project: {
                    _id: 1,
                    award_id: "$present_in"
                }
            }
        ]);
        let category = null;
        for(let i=1; (category = await categoriesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving category(present_in) [%d - %d]", i, category._id, category.award_id);
            statements.push(`(category_${category._id})-[:PRESENT_IN]->(award_${category.award_id})`);
            await Neo4j.runStatement(`
                MATCH (category:Category {_id: ${category._id}}), (award:Award {_id: ${category.award_id}})
                CREATE (category)-[:PRESENT_IN]->(award)`);
        }
        
        console.log("[ETL] - Category relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {categories-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};