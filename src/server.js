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



MongoDB
.then(async () => { 
    console.log("MongoDB Connection established successfully");
    require('./mongo/loader');
})
.catch(async (error) => {
    console.log("MongoDB Connection error");
    console.log("Details :: ", error);
});