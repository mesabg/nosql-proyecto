/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Awards
 */
const awards = [
    {
        _id: 1,
        name: 'The Stinkers Bad Movie Awards',
        has_category: [1, 2, 3]
    }, 
    {
        _id: 2,
        name: 'Young Artist Awards',
        has_category: [4, 5]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('award').remove({});
        awards.forEach(async (award) => {
            await db.collection('award').save(award);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save awards data");
        reject(error);
    }
})
