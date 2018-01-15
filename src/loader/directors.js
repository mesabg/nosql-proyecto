/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Directors
 */
const directors = [
    {
        _id: 1,
        name: 'Vincent McEveety',
        directed_in: [1]
    },
    {
        _id: 2,
        name: 'Charles Jarrott',
        directed_in: [2]
    },
    {
        _id: 3,
        name: 'Michael Nankin',
        directed_in: [3]
    },
    {
        _id: 4,
        name: 'David Wechter',
        directed_in: [3]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('director').remove({});
        directors.forEach(async (director) => {
            await db.collection('director').save(director);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save directors data");
        reject(error);
    }
})
