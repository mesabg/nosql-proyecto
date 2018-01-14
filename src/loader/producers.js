/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Producers
 */
const producers = [
    {
        _id: 1,
        name: 'Kevin Corcoran',
        produced_in: [1]
    },{
        _id: 2,
        name: 'Ron Miller',
        produced_in: [1,2]
    },{
        _id: 3,
        name: 'Don Tait',
        produced_in: [1]
    },
    {
        _id: 4,
        name: 'Jan Williams',
        produced_in: [2]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('producer').remove({});
        producers.forEach(async (producer) => {
            await db.collection('producer').save(producer);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save producers data");
        reject(error);
    }
})
