/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Categories
 */
const categories = [
    {
        _id: 1,
        name: 'Worst Sequel',
        present_in: [1]
    },{
        _id: 2,
        name: 'Worst Performance by a Child in a Featured Role',
        present_in: [1]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('category').remove({});
        categories.forEach(async (category) => {
            await db.collection('category').save(category);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save categories data");
        reject(error);
    }
})
