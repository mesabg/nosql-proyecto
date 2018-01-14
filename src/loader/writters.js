/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Writters
 */
const writters = [
    {
        _id: 1,
        name: 'Gordon Buford',
        wrote_in: [1]
    },
    {
        _id: 1,
        name: 'Don Tait',
        wrote_in: [1]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('writter').remove({});
        writters.forEach(async (writter) => {
            await db.collection('writter').save(writter);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save writters data");
        reject(error);
    }
})
