/**
 * ETL main process
 */

/**
 * Dependencies
 */
const Neo4j = require('../neo4j');
const actors = require('./actors');
const awards = require('./awards');
const categories = require('./categories');


module.exports = new Promise(async (resolve, reject) => {
    try {
        console.log("[ETL] - process starting...");

        //-- Clear database
        await Neo4j.runStatement(`MATCH (n) DETACH DELETE n`);

        let statements = [];

        //-- Load nodes
        //statements = statements.concat(await actors.attributesLoader());
        statements = statements.concat(await awards.attributesLoader());
        statements = statements.concat(await categories.attributesLoader());
        
        //-- Load edges
        //statements = statements.concat(await actors.relationsLoader());
        statements = statements.concat(await awards.relationsLoader());
        statements = statements.concat(await categories.relationsLoader());

        //-- Run statement
        await Neo4j.runStatement(`CREATE ${statements.join()}`);

        console.log("[ETL] - process finished successfully!");
        resolve();
    } catch (reason) {
        console.log("An error ocurred on {main-etl} process");
        reject(reason);
    }
});