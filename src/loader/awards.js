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
        has_category: [4, 5, 9, 16, 17, 26, 27,36]
    },
    {
        _id: 3,
        name: 'Academy of Science Fiction, Fantasy & Horror Films, USA',
        has_category: [6, 7, 20, 21, 22, 23,31,32, 38, 19,39,8]
    },
    {
        _id: 4,
        name: 'Academy Awards',
        has_category: [18, 19, 28, 29, 45]
    },
	 {
        _id: 5,
        name: 'Hugo Awards',
        has_category: [24]
    },
	 {
        _id: 6,
        name: 'Golden Screen, Germany',
        has_category: [25]
    },
	 {
        _id: 7,
        name: 'BAFTA Awards',
        has_category: [30]
    },
	 {
        _id: 8,
        name: 'DVD Exclusive Awards',
        has_category: [33,34]
    },
	 {
        _id: 9,
        name: 'Guinness World Record Award',
        has_category: [35]
    },
	 {
        _id: 10,
        name: 'Golden Globes',
        has_category: [37]
    },
	 {
        _id: 11,
        name: 'Avoriaz Fantastic Film Festival',
        has_category: [40]
    },
 	 {
        _id: 12,
        name: 'Boston Society of Film Critics Awards',
        has_category: [41]
    },
 	 {
        _id: 13,
        name: 'Los Angeles Film Critics Association Awards',
        has_category: [41]
    },
	 {
        _id: 14,
        name: 'Motion Picture Sound Editors',
        has_category: [42]
    },
	 {
        _id: 15,
        name: 'National Society of Film Critics Awards',
        has_category: [41]
    },
    {
        _id: 16,
        name: 'New York Film Critics Circle Awards',
        has_category: [43]
    },
 	 {
        _id: 17,
        name: 'Western Heritage Awards',
        has_category: [44]
    },
 	 {
        _id: 18,
        name: 'San Francisco International Film Festival',
        has_category: [46]
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
