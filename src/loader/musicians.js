/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Musicians
 */
const musicians = [
    {
        _id: 1,
        name: 'Frank De Vol',
        wrote_music_of: [1]
    },
    {
        _id: 2,
        name: 'Maurice Jarre',
        wrote_music_of: [2]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('musician').remove({});
        musicians.forEach(async (musician) => {
            await db.collection('musician').save(musician);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save musicians data");
        reject(error);
    }
})
