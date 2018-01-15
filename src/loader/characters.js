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
    },
    {
        _id: 30,
        name: 'Adam Larson - Yellow Team Leader',
        appear_in: [3],
        personified_by: [30]
    },
    {
        _id: 31,
        name: 'Laura - Yellow Team',
        appear_in: [3],
        personified_by: [31]
    },
    {
        _id: 32,
        name: 'Marvin - Yellow Team',
        appear_in: [3],
        personified_by: [32]
    },
    {
        _id: 33,
        name: 'Scott Larson',
        appear_in: [3],
        personified_by: [33]
    },
    {
        _id: 34,
        name: 'Harold - Blue Team Leader',
        appear_in: [3],
        personified_by: [34]
    },
    {
        _id: 35,
        name: 'Lucille - Blue Team',
        appear_in: [3],
        personified_by: [35]
    },
    {
        _id: 36,
        name: 'Melio - Blue Team',
        appear_in: [3],
        personified_by: [36]
    },
    {
        _id: 37,
        name: 'Barf - Blue Team',
        appear_in: [3],
        personified_by: [37]
    },
    {
        _id: 38,
        name: 'Flynch - Yellow Team (as Joel P. Kenney)',
        appear_in: [3],
        personified_by: [38]
    },
    {
        _id: 39,
        name: 'Blade - Blue Team',
        appear_in: [3],
        personified_by: [39]
    },
    {
        _id: 40,
        name: 'Donna - Red Team Leader',
        appear_in: [3],
        personified_by: [40]
    },
    {
        _id: 41,
        name: 'Berle - Red Team',
        appear_in: [3],
        personified_by: [41]
    },
    {
        _id: 42,
        name: 'Peggy - Red Team',
        appear_in: [3],
        personified_by: [42]
    },
    {
        _id: 43,
        name: 'Lulu - Red Team',
        appear_in: [3],
        personified_by: [43]
    },
    {
        _id: 44,
        name: 'Wesley - White Team Leader',
        appear_in: [3],
        personified_by: [44]
    },
    {
        _id: 45,
        name: 'Debater #1 - White Team',
        appear_in: [3],
        personified_by: [45]
    },
    {
        _id: 46,
        name: 'Debater #2 - White Team',
        appear_in: [3],
        personified_by: [46]
    },
    {
        _id: 47,
        name: 'Debater #3 - White Teamr',
        appear_in: [3],
        personified_by: [47]
    },
    {
        _id: 48,
        name: 'Lavitas - Green Team Leader',
        appear_in: [3],
        personified_by: [48]
    },
    {
        _id: 49,
        name: 'Blaylak - Green Team',
        appear_in: [3],
        personified_by: [49]
    },
    {
        _id: 50,
        name: 'Cudzo - Green Team',
        appear_in: [3],
        personified_by: [50]
    },
    {
        _id: 51,
        name: 'Gerber - Green Team',
        appear_in: [3],
        personified_by: [51]
    },
    {
        _id: 52,
        name: 'Mrs. Grimhaus',
        appear_in: [3],
        personified_by: [52]
    },
    {
        _id: 53,
        name: 'Leon',
        appear_in: [3],
        personified_by: [53]
    },
    {
        _id: 54,
        name: 'Candy (as Debi Richter)',
        appear_in: [3],
        personified_by: [54]
    },
    {
        _id: 55,
        name: 'Sunshine',
        appear_in: [3],
        personified_by: [55]
    },
    {
        _id: 56,
        name: 'Wally Thorpe',
        appear_in: [3],
        personified_by: [56]
    },
    {
        _id: 57,
        name: 'Mrs. Thorpe',
        appear_in: [3],
        personified_by: [57]
    },
    {
        _id: 58,
        name: 'Mrs. Aylwood',
        appear_in: [4],
        personified_by: [58]
    },
    {
        _id: 59,
        name: 'Jan Curtis',
        appear_in: [4],
        personified_by: [59]
    },
    {
        _id: 60,
        name: 'Ellie Curtis',
        appear_in: [4],
        personified_by: [60]
    },
    {
        _id: 61,
        name: 'Helen Curtis',
        appear_in: [4],
        personified_by: [61]
    },
    {
        _id: 62,
        name: 'Paul Curtis',
        appear_in: [4],
        personified_by: [62]
    },
    {
        _id: 63,
        name: 'Mike Fleming',
        appear_in: [4],
        personified_by: [63]
    },
    {
        _id: 64,
        name: 'Mary Fleming',
        appear_in: [4],
        personified_by: [64]
    },
    {
        _id: 65,
        name: 'Tom Colley',
        appear_in: [4],
        personified_by: [65]
    },
    {
        _id: 66,
        name: 'John Keller',
        appear_in: [4],
        personified_by: [66]
    },
    {
        _id: 67,
        name: 'Karen Aylwood',
        appear_in: [4],
        personified_by: [67]
    },
    {
        _id: 68,
        name: 'Mrs. Thayer',
        appear_in: [4],
        personified_by: [68]
    },
    {
        _id: 69,
        name: 'Mrs. Thayer',
        appear_in: [4],
        personified_by: [69]
    },
    {
        _id: 70,
        name: 'Popeye',
        appear_in: [5],
        personified_by: [70]
    },
    {
        _id: 71,
        name: 'Olive Oyl',
        appear_in: [5],
        personified_by: [71]
    },
    {
        _id: 72,
        name: 'Wimpy',
        appear_in: [5],
        personified_by: [72]
    },
    {
        _id: 73,
        name: 'Bluto',
        appear_in: [5],
        personified_by: [73]
    },
    {
        _id: 74,
        name: 'Geezil',
        appear_in: [5],
        personified_by: [74]
    },
    {
        _id: 75,
        name: 'The Taxman',
        appear_in: [5],
        personified_by: [75]
    },
    {
        _id: 76,
        name: 'Cole Oyl',
        appear_in: [5],
        personified_by: [76]
    },
    {
        _id: 77,
        name: 'Nana Oyl',
        appear_in: [5],
        personified_by: [77]
    },
    {
        _id: 78,
        name: 'Castor Oyl',
        appear_in: [5],
        personified_by: [78]
    },
    {
        _id: 79,
        name: 'Rough House (as Allan Nicholls) ',
        appear_in: [5],
        personified_by: [79]
    },
    {
        _id: 80,
        name: 'Swee pea',
        appear_in: [5],
        personified_by: [80]
    },
    {
        _id: 81,
        name: 'Ham Gravy, the Old Boyfriend',
        appear_in: [5],
        personified_by: [81]
    },
    {
        _id: 82,
        name: 'Amy Medford',
        appear_in: [6],
        personified_by: [82]
    },
    {
        _id: 83,
        name: 'Dr. Ben Corcoran',
        appear_in: [6],
        personified_by: [83]
    },
    {
        _id: 84,
        name: 'Helen Gibbs',
        appear_in: [6],
        personified_by: [84]
    },
    {
        _id: 85,
        name: 'Elliot Medford',
        appear_in: [6],
        personified_by: [85]
    },
    {
        _id: 86,
        name: 'Lyle Ferguson',
        appear_in: [6],
        personified_by: [86]
    },
    {
        _id: 86,
        name: 'Hazel Johnson',
        appear_in: [6],
        personified_by: [86]
    },
    {
        _id: 87,
        name: 'Malvina',
        appear_in: [6],
        personified_by: [87]
    },
    {
        _id: 88,
        name: 'Edgar Wambuck',
        appear_in: [6],
        personified_by: [88]
    },
    {
        _id: 89,
        name: 'Rose Metcalf',
        appear_in: [6],
        personified_by: [89]
    },
    {
        _id: 90,
        name: 'Clyde Pruett',
        appear_in: [6],
        personified_by: [90]
    },
    {
        _id: 91,
        name: 'Virgil Goodloe',
        appear_in: [6],
        personified_by: [91]
    },
    {
        _id: 92,
        name: 'Mervin Grimes ',
        appear_in: [6],
        personified_by: [37]
    },
    {
        _id: 93,
        name: 'Molly Tribble',
        appear_in: [6],
        personified_by: [93]
    },
    {
        _id: 94,
        name: 'Caroline Chapman',
        appear_in: [6],
        personified_by: [94]
    },
 	 {
        _id: 95,
        name: 'Mrs. Lindey',
        appear_in: [6],
        personified_by: [95]
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
