/**
 * Global dependencies
 */
const Bluebird = require('bluebird');
require('dotenv').config();
global.Promise = Bluebird;

/**
 * Local dependencies
 */
const MongoDB = require('./mongo/connect');
const model = require('./mongo');
require('./general').config();


MongoDB
.then(async () => { 
    console.log("MongoDB Connection established successfully");

    /**
     * UNCOMMENT THIS TO RELOAD DROP MONGODB DATABASE AND RELOAD THE DATA
     */
    await require('./loader');
    console.log("Data has been saved");

    /**
     * ETL, DATA GOES FROM MONGO TO NEO4J
     */
    await require('./etl');
})
.catch(async (error) => {
    console.log("MongoDB Connection error");
    console.log("Details :: ", error);
});