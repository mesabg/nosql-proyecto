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



MongoDB
.then(async () => { 
    console.log("MongoDB Connection established successfully");
})
.catch(async (error) => {
    console.log("MongoDB Connection error");
    console.log("Details :: ", error);
});