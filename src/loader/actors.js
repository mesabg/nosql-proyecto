/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;


/**
 * Actors
 */
const actors = [
    {
        _id: 1,
        name: 'Cloris Leachman',
        acted_in: [1],
        personifies: [1]
    },{
        _id: 2,
        name: 'Charles Martin Smith',
        acted_in: [1],
        personifies: [2]
    },{
        _id: 3,
        name: 'John Vernon',
        acted_in: [1],
        personifies: [3]
    },{
        _id: 4,
        name: 'Stephen W. Burns',
        acted_in: [1],
        personifies: [4]
    },{
        _id: 5,
        name: 'Elyssa Davalos',
        acted_in: [1],
        personifies: [5]
    },{
        _id: 6,
        name: 'Joaquin Garay III',
        acted_in: [1],
        personifies: [6]
    },{
        _id: 7,
        name: 'Harvey Korman',
        acted_in: [1],
        personifies: [7]
    },{
        _id: 8,
        name: 'Richard Jaeckel',
        acted_in: [1],
        personifies: [8]
    },{
        _id: 9,
        name: 'Alex Rocco',
        acted_in: [1],
        personifies: [9]
    },{
        _id: 10,
        name: 'Fritz Feld',
        acted_in: [1],
        personifies: [10]
    },{
        _id: 11,
        name: 'Vito Scotti',
        acted_in: [1],
        personifies: [11]
    },{
        _id: 12,
        name: 'Jose Gonzales-Gonzales',
        acted_in: [1],
        personifies: [12]
    },{
        _id: 13,
        name: 'Ruben Moreno',
        acted_in: [1],
        personifies: [13]
    },{
        _id: 14,
        name: 'Tina Menard',
        acted_in: [1],
        personifies: [14]
    },{
        _id: 15,
        name: 'Jorge Moreno',
        acted_in: [1],
        personifies: [15]
    },
    {
        _id: 16,
        name: 'Elliott Gould',
        acted_in: [2],
        personifies: [16]
    },
    {
        _id: 17,
        name: 'Genevieve Bujold',
        acted_in: [2],
        personifies: [17]
    },
    {
        _id: 18,
        name: 'Ricky Schroder',
        acted_in: [2],
        personifies: [18]
    },
    {
        _id: 19,
        name: 'Vincent Gardenia',
        acted_in: [2],
        personifies: [19]
    },
    {
        _id: 20,
        name: 'Tammy Lauren',
        acted_in: [2],
        personifies: [20]
    },
    {
        _id: 21,
        name: 'John Fujioka',
        acted_in: [2],
        personifies: [21]
    },
    {
        _id: 22,
        name: 'Yuki Shimoda',
        acted_in: [2],
        personifies: [22]
    },
    {
        _id: 23,
        name: 'John P. Ryan',
        acted_in: [2],
        personifies: [23]
    },
    {
        _id: 24,
        name: 'Dana Elcar',
        acted_in: [2],
        personifies: [24]
    },
    {
        _id: 25,
        name: 'Ruth Manning',
        acted_in: [2],
        personifies: [25]
    },
    {
        _id: 26,
        name: 'Arthur Adams',
        acted_in: [2],
        personifies: [26]
    },
    {
        _id: 27,
        name: 'Austin Willis',
        acted_in: [2],
        personifies: [27]
    },
    {
        _id: 28,
        name: 'Peter Renaday',
        acted_in: [2],
        personifies: [28]
    },
    {
        _id: 29,
        name: 'Bob Whiting',
        acted_in: [2],
        personifies: [29]
    },
    {
        _id: 30,
        name: 'David Naughton',
        acted_in: [3],
        personifies: [30]
    },
    {
        _id: 31,
        name: 'Debra Clinger',
        acted_in: [3],
        personifies: [31]
    },
    {
        _id: 32,
        name: 'David Damas',
        acted_in: [3],
        personifies: [32]
    },
    {
        _id: 33,
        name: 'Michael J. Fox',
        acted_in: [3],
        personifies: [33]
    },
    {
        _id: 34,
        name: 'Stephen Furst',
        acted_in: [3],
        personifies: [34]
    },
    {
        _id: 35,
        name: 'Patricia Alice Albrecht',
        acted_in: [3],
        personifies: [35]
    },
    {
        _id: 36,
        name: 'Andy Tennant',
        acted_in: [3],
        personifies: [36]
    },
    {
        _id: 37,
        name: 'Brian Frishman',
        acted_in: [3],
        personifies: [37]
    },
    {
        _id: 38,
        name: 'Joel Kenney',
        acted_in: [3],
        personifies: [38]
    },
    {
        _id: 39,
        name: 'Sal Lopez',
        acted_in: [3],
        personifies: [39]
    },
    {
        _id: 40,
        name: 'Maggie Roswell',
        acted_in: [3],
        personifies: [40]
    },
    {
        _id: 41,
        name: 'Robyn Petty',
        acted_in: [3],
        personifies: [41]
    },
    {
        _id: 42,
        name: 'Betsy Lynn Thompson',
        acted_in: [3],
        personifies: [42]
    },
    {
        _id: 43,
        name: 'Carol Gwynn Thompson',
        acted_in: [3],
        personifies: [43]
    },
    {
        _id: 44,
        name: 'Eddie Deezen',
        acted_in: [3],
        personifies: [44]
    },
    {
        _id: 45,
        name: 'Marvin Katzoff',
        acted_in: [3],
        personifies: [45]
    },
    {
        _id: 46,
        name: 'Christopher Sands',
        acted_in: [3],
        personifies: [46]
    },
    {
        _id: 47,
        name: 'Michael Gitomer',
        acted_in: [3],
        personifies: [47]
    },
    {
        _id: 48,
        name: 'Brad Wilkin',
        acted_in: [3],
        personifies: [48]
    },
    {
        _id: 49,
        name: 'Dirk Blocker',
        acted_in: [3],
        personifies: [49]
    },
    {
        _id: 50,
        name: 'Trevor Henley',
        acted_in: [3],
        personifies: [50]
    },
    {
        _id: 51,
        name: 'Keny Long',
        acted_in: [3],
        personifies: [51]
    },
    {
        _id: 52,
        name: 'Irene Tedrow',
        acted_in: [3],
        personifies: [52]
    },
    {
        _id: 53,
        name: 'Alan Solomon',
        acted_in: [3],
        personifies: [53]
    },
    {
        _id: 54,
        name: 'Deborah Richter',
        acted_in: [3],
        personifies: [54]
    },
    {
        _id: 55,
        name: 'Kirsten Baker',
        acted_in: [3],
        personifies: [55]
    }
    {
        _id: 56,
        name: 'John Fiedler',
        acted_in: [3],
        personifies: [56]
    },
    {
        _id: 57,
        name: 'Ceil Gabot',
        acted_in: [3],
        personifies: [57]
    }

];


/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('actor').remove({});
        actors.forEach(async (actor) => {
            await db.collection('actor').save(actor);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save actors data");
        reject(error);
    }
})

