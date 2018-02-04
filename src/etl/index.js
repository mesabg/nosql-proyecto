/**
 * ETL main process
 */

/**
 * Dependencies
 */
const fs = require('fs');
const path = require('path');
const Spinner = require('cli-spinner').Spinner;
const Neo4j = require('../neo4j');
const actors = require('./actors');
const awards = require('./awards');
const categories = require('./categories');
const characters = require('./characters');
const directors = require('./directors');
const movies = require('./movies');
const states = require('./states');
const studios = require('./studios');


module.exports = new Promise(async (resolve, reject) => {
    try {
        console.log("[ETL] - process starting...");
        //-- Start spinner
        let spinner = new Spinner('processing... %s');
        spinner.setSpinnerString('|/-\\');
        spinner.start();

        //-- Clear database
        await Neo4j.runStatement(`MATCH (n) DETACH DELETE n`);

        let statements = [];

        //-- Load nodes
        statements = statements.concat(await actors.attributesLoader());
        statements = statements.concat(await awards.attributesLoader());
        statements = statements.concat(await categories.attributesLoader());
        statements = statements.concat(await characters.attributesLoader());
        statements = statements.concat(await directors.attributesLoader());
        statements = statements.concat(await movies.attributesLoader());
        statements = statements.concat(await states.attributesLoader());
        statements = statements.concat(await studios.attributesLoader());
        
        //-- Load edges
        statements = statements.concat(await actors.relationsLoader());
        statements = statements.concat(await awards.relationsLoader());
        statements = statements.concat(await categories.relationsLoader());
        statements = statements.concat(await characters.relationsLoader());
        statements = statements.concat(await directors.relationsLoader());
        statements = statements.concat(await movies.relationsLoader());
        statements = statements.concat(await states.relationsLoader());
        statements = statements.concat(await studios.relationsLoader());


        //-- Save statements on a file
        await new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, 'etl.cypher'), `CREATE ${statements.join()}`, function(error) {
                if(error) {
                    console.log("[ETL] - An error ocurred trying to save etl.cypher file");
                    reject(error);
                    return;
                }

                console.log("[ETL] - etl.cypher file saved was saved succesfully");
                resolve();
            });
        });

        //-- Run statement
        //await Neo4j.runStatement(`CREATE ${statements.join()}`);

        console.log("[ETL] - process finished successfully!");
        spinner.stop();
        resolve();
    } catch (reason) {
        console.log("An error ocurred on {main-etl} process");
        reject(reason);
    }
});