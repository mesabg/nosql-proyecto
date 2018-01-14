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
    },
	 {
        _id: 16,
        name: 'Noah Dugan',
        appear_in: [2],
        personified_by: [16]
    },
	 {
        _id: 17,
        name: 'Bernadette Lafleur (as Genevieve Bujold)',
        appear_in: [2],
        personified_by: [17]
    },
	 {
        _id: 18,
        name: 'Bobby',
        appear_in: [2],
        personified_by: [18]
    },
	 {
        _id: 19,
        name: 'Stoney',
        appear_in: [2],
        personified_by: [19]
    },
	 {
        _id: 20,
        name: 'Julie',
        appear_in: [2],
        personified_by: [20]
    },
	 {
        _id: 21,
        name: 'Cleveland',
        appear_in: [2],
        personified_by: [21]
    },
	 {
        _id: 22,
        name: 'Hiro',
        appear_in: [2],
        personified_by: [22]
    },
	 {
        _id: 23,
        name: 'Coslough ',
        appear_in: [2],
        personified_by: [23]
    }
	 {
        _id: 24,
        name: 'Benchley',
        appear_in: [2],
        personified_by: [24]
    },
	 {
        _id: 25,
        name: 'Charlotte Braithwaite',
        appear_in: [2],
        personified_by: [25]
    },
	 {
        _id: 26,
        name: 'Leipzig Manager',
        appear_in: [2],
        personified_by: [26]
    }
	 {
        _id: 27,
        name: 'Slabotsky',
        appear_in: [2],
        personified_by: [27]
    },
	 {
        _id: 28,
        name: 'Irate Pilot (as Pete Renaday)',
        appear_in: [2],
        personified_by: [28]
    },
	 {
        _id: 29,
        name: 'Chaplain',
        appear_in: [2],
        personified_by: [29]
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
