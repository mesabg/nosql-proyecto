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
        directed_in: [1,4,6]
    },
    {
        _id: 2,
        name: 'Charles Jarrott',
        directed_in: [2,7]
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
    },    
	 {
        _id: 5,
        name: 'John Hough',
        directed_in: [4]
    },
	 {
        _id: 6,
        name: 'Robert Altman',
        directed_in: [5]
    },
	 {
        _id: 7,
        name: 'Matthew Robbins',
        directed_in: [8]
    },
	 {
        _id: 8,
        name: 'Steven Hilliard Stern',
        directed_in: [9]
    },
	 {
        _id: 9,
        name: 'Ted Berman',
        directed_in: [10]
    },
	 {
        _id: 10,
        name: 'Richard Rich',
        directed_in: [10]
    },
	 {
        _id: 11,
        name: 'Art Stevens',
        directed_in: [10]
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
