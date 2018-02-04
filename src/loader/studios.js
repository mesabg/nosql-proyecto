/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Studios
 */
const studios = [ 
    { _id: 0, name: 'Walt Disney Productions', has_state: 12, has_movie: [ 1, 2, 3, 4 ] },
    { _id: 1, name: 'Walt Disney Pictures', has_state: 15, has_movie: [ 23, 28, 31 ] },
    { _id: 2, name: 'Kushner-Locke Company', has_state: 11, has_movie: [ 17, 27 ] },
    { _id: 3, name: 'Walt Disney Feature Animation', has_state: 13, has_movie: [ 29, 32 ] } 
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('studios').remove({});
        studios.forEach(async (studio) => {
            await db.collection('studio').save(studio);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save studios data");
        reject(error);
    }
})
