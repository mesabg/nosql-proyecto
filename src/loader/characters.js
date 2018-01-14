/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;


/**
 * Characters
 */
const characters = [
    {
        _id: 1,
        name: 'Aunt Louise',
        appear_in: [1],
        personified_by: [1]
    },{
        _id: 2,
        name: 'D.J.',
        appear_in: [1],
        personified_by: [2]
    },{
        _id: 3,
        name: 'Prindle',
        appear_in: [1],
        personified_by: [3]
    },{
        _id: 4,
        name: 'Pete',
        appear_in: [1],
        personified_by: [4]
    },{
        _id: 5,
        name: 'Melissa',
        appear_in: [1],
        personified_by: [5]
    },{
        _id: 6,
        name: 'Paco',
        appear_in: [1],
        personified_by: [6]
    },{
        _id: 7,
        name: 'Captain Blythe',
        appear_in: [1],
        personified_by: [7]
    },{
        _id: 8,
        name: 'Shepard',
        appear_in: [1],
        personified_by: [8]
    },{
        _id: 9,
        name: 'Quinn',
        appear_in: [1],
        personified_by: [9]
    },{
        _id: 10,
        name: 'Chief Steward',
        appear_in: [1],
        personified_by: [10]
    },{
        _id: 11,
        name: 'Armando Moccia',
        appear_in: [1],
        personified_by: [11]
    },{
        _id: 12,
        name: 'Garage Owner (as Jose Gonzalez Gonzalez)',
        appear_in: [1],
        personified_by: [12]
    },{
        _id: 13,
        name: 'Store Owner',
        appear_in: [1],
        personified_by: [13]
    },{
        _id: 14,
        name: 'Store Owner`s Wife',
        appear_in: [1],
        personified_by: [14]
    },{
        _id: 15,
        name: 'Bus Driver',
        appear_in: [1],
        personified_by: [15]
    }
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('character').remove({});
        characters.forEach(async (character) => {
            await db.collection('character').save(character);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save characters data");
        reject(error);
    }
})