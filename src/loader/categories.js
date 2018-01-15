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
        present_in: [1,2,3]
    },
    {
        _id: 3,
        name: 'Least Special Effects',
        present_in: [2]
    },{
        _id: 4,
        name: 'Best Major Motion Picture - Family Entertainment',
        present_in: [2]
    },
    {
        _id: 5,
        name: 'Best Young Actor - Major Motion Picture',
        present_in: [2]
    },
    {
        _id: 6,
        name: 'Best International Film',
        present_in: [3]
    },{
        _id: 7,
        name: 'Best Supporting Actress',
        present_in: [3]
    },
    {
        _id: 8,
        name: 'Worst Supporting Actress',
        present_in: [3]
    },
    {
        _id: 9,
        name: 'Best Young Motion Picture Actress',
        present_in: [3]
    },
    {
        _id: 10,
        name: 'Worst Picture',
        present_in: [5]
    },
    {
        _id: 11,
        name: 'Worst Song or Song Performance in a Film or End Credits',
        present_in: [5]
    },
    {
        _id: 12,
        name: 'Worst Remake',
        present_in: [5]
    },
    {
        _id: 13,
        name: 'Worst Actor',
        present_in: [5]
    },
    {
        _id: 14,
        name: 'Worst Sense of Direction (Stop them before they direct again!)',
        present_in: [5]
    },
    {
        _id: 15,
        name: 'Worst Screenplay',
        present_in: [5]
    },
    {
        _id: 16,
        name: 'Best Young Motion Picture Actor',
        present_in: [6,11]
    },
    {
        _id: 17,
        name: 'Best Motion Picture - Family Enjoyment',
        present_in: [6]
    },
    {
        _id: 18,
        name: 'Best Effects, Visual Effects',
        present_in: [8]
    },
    {
        _id: 19,
        name: 'Best Music, Original Score',
        present_in: [8]
    },
    {
        _id: 20,
        name: 'Best Fantasy Film',
        present_in: [6,10]
    },
    {
        _id: 21,
        name: 'Best Supporting Actor',
        present_in: [8]
    },
    {
        _id: 22,
        name: 'Best Costumes',
        present_in: [8,12]
    },
    {
        _id: 23,
        name: 'Best Special Effects',
        present_in: [8]
    },
    {
        _id: 24,
        name: 'Best Dramatic Presentation',
        present_in: [8]
    },
    {
        _id: 25,
        name: 'Golden Screen',
        present_in: [10]
    },
    {
        _id: 26,
        name: 'Best Motion Picture - Fantasy or Comedy - Family Enjoyment',
        present_in: [10]
    },
    {
        _id: 27,
        name: 'Best Family Motion Picture',
        present_in: [11]
    },
	 {
        _id: 28,
        name: 'Best Costume Design',
        present_in: [12]
    },
	 {
        _id: 29,
        name: 'Best Sound',
        present_in: [12]
    },
	 {
        _id: 30,
        name: 'Best Special Visual Effects',
        present_in: [12]
    },
	 {
        _id: 31,
        name: 'Best Science Fiction Film',
        present_in: [12]
    },
	 {
        _id: 32,
        name: 'Best Animated Film',
        present_in: [12]
    },
	 {
        _id: 33,
        name: 'Best Overall New Extra Features, Library Release',
        present_in: [12]
    },
 	 {
        _id: 34,
        name: 'Original Retrospective Documentary, Library Release',
        present_in: [12]
    },
	 {
        _id: 35,
        name: 'First Use of Computer-Generated Animation',
        present_in: [12]
    },
	 {
        _id: 36,
        name: 'Best Family Feature - Animated, Musical or Fantasy',
        present_in: [12]
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
