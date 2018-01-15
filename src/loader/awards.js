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
        has_category: [1, 2, 3, 8, 10, 11, 12, 13, 14, 15]
    }, 
    {
        _id: 2,
        name: 'Young Artist Awards',
        has_category: [4, 5, 9, 16, 17]
    },
    {
        _id: 3,
        name: 'Academy of Science Fiction, Fantasy & Horror Films, USA',
        has_category: [6, 7, 20, 21, 22, 23]
    },
    {
        _id: 4,
        name: 'Academy Awards',
        has_category: [18, 19]
    },
	 {
        _id: 5,
        name: 'Hugo Awards',
        has_category: [24]
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
