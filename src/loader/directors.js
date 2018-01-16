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
    },		 
    {
        _id: 12,
        name: 'Delbert Mann',
        directed_in: [11,18]
    },
    {
        _id: 13,
        name: 'Steven Lisberger',
        directed_in: [12]
    },
	 {
        _id: 14,
        name: 'Tim Hunter',
        directed_in: [13]
    },
	 {
        _id: 15,
        name: 'Jack Clayton',
        directed_in: [14]
    }, 
	 {
        _id: 16,
        name: 'Carroll Ballard',
        directed_in: [15]
    },
	 {
        _id: 17,
        name: 'Burny Mattinson',
        directed_in: [16, 25]
    },
	 {
        _id: 18,
        name: 'Michael Tuchner',
        directed_in: [17]
    },
	 {
        _id: 19,
        name: 'Theodore Thomas',
        directed_in: [19]
    },
 	 {
        _id: 20,
        name: 'Phillip Borsos',
        directed_in: [20]
    },
    {
        _id: 21,
        name: 'Ted Berman',
        directed_in: [21]
    },
    {
        _id: 22,
        name: 'Richard Rich',
        directed_in: [21]
    },
    {
        _id: 23,
        name: 'Walter Murch',
        directed_in: [22]
    },
    {
        _id: 24,
        name: 'Jeremy Kagan',
        directed_in: [23]
    },
    {
        _id: 25,
        name: 'Randal Klesier',
        directed_in: [24]
    },
    {
        _id: 26,
        name: 'Ron Clements',
        directed_in: [25, 32]
    },
    {
        _id: 27,
        name: 'Dave Michener',
        directed_in: [25]
    },
    {
        _id: 28,
        name: 'Joe Camp',
        directed_in: [26]
    },
    {
        _id: 29,
        name: 'Jerry Rees',
        directed_in: [27]
    },
    {
        _id: 30,
        name: 'Geoff Burrowes',
        directed_in: [28]
    },
    {
        _id: 31,
        name: 'George Scribner',
        directed_in: [29]
    },
    {
        _id: 32,
        name: 'Joe Johnston',
        directed_in: [30]
    },
    {
        _id: 33,
        name: 'Jeff Blyth',
        directed_in: [31]
    },
    {
        _id: 34,
        name: 'John Musker',
        directed_in: [32]
    },
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
