/**
 * Load default data - to mongo db
 */

const actors = require('./actors');
const awards = require('./awards');
const categories = require('./categories');
const characters = require('./characters');
const directors = require('./directors');
const movies = require('./movies');

module.exports = new Promise(async (resolve, reject) => {
    try {
        let response = await Promise.all([
            actors,
            awards,
            categories,
            characters,
            directors,
            movies
        ]);
        resolve(response);
    } catch (error) {
        console.log("An error ocurred trying to save main data");
        reject(error);
    }
});