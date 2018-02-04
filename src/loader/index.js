/**
 * Load default data - to mongo db
 */

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
        let response = await Promise.all([
            actors,
            awards,
            categories,
            characters,
            directors,
            movies,
            states,
            studios
        ]);
        resolve(response);
    } catch (error) {
        console.log("An error ocurred trying to save main data");
        reject(error);
    }
});