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
        personifies: [16,119]
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
        personifies: [24, 101]
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
        personifies: [37, 92]
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
    },
    {
        _id: 56,
        name: 'John Fiedler',
        acted_in: [3],
        personifies: [56,141]
    },
    {
        _id: 57,
        name: 'Ceil Gabot',
        acted_in: [3],
        personifies: [57]
    },
    {
        _id: 58,
        name: 'Bette Davis',
        acted_in: [4],
        personifies: [58]
    },
    {
        _id: 59,
        name: 'Lynn-Holly Johnson',
        acted_in: [4],
        personifies: [59]
    },
    {
        _id: 60,
        name: 'Kyle Richards',
        acted_in: [4],
        personifies: [60]
    },
    {
        _id: 61,
        name: 'Carroll Baker',
        acted_in: [4],
        personifies: [61]
    },
    {
        _id: 62,
        name: 'David McCallum',
        acted_in: [4],
        personifies: [62]
    },
    {
        _id: 63,
        name: 'Benedict Taylor',
        acted_in: [4],
        personifies: [63]
    },
    {
        _id: 64,
        name: 'Frances Cuka',
        acted_in: [4],
        personifies: [64]
    },
    {
        _id: 65,
        name: 'Richard Pasco',
        acted_in: [4],
        personifies: [65]
    },
    {
        _id: 66,
        name: 'Ian Bannen',
        acted_in: [4],
        personifies: [66]
    },
    {
        _id: 67,
        name: 'Katharine Levy',
        acted_in: [4],
        personifies: [67]
    },
    {
        _id: 68,
        name: 'Eleanor Summerfield',
        acted_in: [4],
        personifies: [68]
    },
    {
        _id: 69,
        name: 'Georgina Hale',
        acted_in: [4],
        personifies: [69]
    },
    {
        _id: 70,
        name: 'Robin Williams',
        acted_in: [5],
        personifies: [70]
    },
    {
        _id: 71,
        name: 'Shelley Duvall',
        acted_in: [5],
        personifies: [71]
    },
    {
        _id: 72,
        name: 'Paul Dooley',
        acted_in: [5],
        personifies: [72]
    },
    {
        _id: 73,
        name: 'Paul L. Smith',
        acted_in: [5],
        personifies: [73]
    },
    {
        _id: 74,
        name: 'Richard Libertini',
        acted_in: [5],
        personifies: [74]
    },
    {
        _id: 75,
        name: 'Donald Moffat',
        acted_in: [5],
        personifies: [75]
    },
    {
        _id: 76,
        name: 'MacIntyre Dixon',
        acted_in: [5],
        personifies: [76]
    },
    {
        _id: 77,
        name: 'Roberta Maxwell',
        acted_in: [5],
        personifies: [77]
    },
    {
        _id: 78,
        name: 'Donovan Scott',
        acted_in: [5],
        personifies: [78]
    },
    {
        _id: 79,
        name: 'Allan F. Nicholls',
        acted_in: [5],
        personifies: [79]
    },
    {
        _id: 80,
        name: 'Wesley Ivan Hurt',
        acted_in: [5],
        personifies: [80]
    },
    {
        _id: 81,
        name: 'Bill Irwin',
        acted_in: [5],
        personifies: [81]
    },
    {
        _id: 82,
        name: 'Jenny Agutter',
        acted_in: [6],
        personifies: [82]
    },
    {
        _id: 83,
        name: 'Barry Newman',
        acted_in: [6],
        personifies: [83]
    },
    {
        _id: 84,
        name: 'Kathleen Nolan',
        acted_in: [6],
        personifies: [84]
    },
    {
        _id: 85,
        name: 'Chris Robinson',
        acted_in: [6],
        personifies: [85]
    },
    {
        _id: 86,
        name: 'Lou Fant',
        acted_in: [6],
        personifies: [86]
    },
    {
        _id: 86,
        name: 'Margaret O Brien',
        acted_in: [6],
        personifies: [86]
    },
    {
        _id: 87,
        name: 'Nanette Fabray',
        acted_in: [6],
        personifies: [87]
    },
    {
        _id: 88,
        name: 'Lance LeGault',
        acted_in: [6],
        personifies: [88]
    },
    {
        _id: 89,
        name: 'Lucille Benson',
        acted_in: [6],
        personifies: [89]
    },
    {
        _id: 90,
        name: 'Jonathan Daly',
        acted_in: [6],
        personifies: [90]
    },
    {
        _id: 91,
        name: 'Lonny Chapman',
        acted_in: [6],
        personifies: [91]
    },
    {
        _id: 92,
        name: 'Jane Daly',
        acted_in: [6],
        personifies: [93]
    },
    {
        _id: 93,
        name: 'Dawn Jeffory',
        acted_in: [6],
        personifies: [94]
    },
    {
        _id: 94,
        name: 'Frances Bay',
        acted_in: [6],
        personifies: [95]
    },
    {
        _id: 95,
        name: 'Michael Crawford',
        acted_in: [7],
        personifies: [96]
    },
    {
        _id: 96,
        name: 'Oliver Reed',
        acted_in: [7],
        personifies: [97]
    },
    {
        _id: 97,
        name: 'Barbara Carrera',
        acted_in: [7],
        personifies: [98]
    },
    {
        _id: 98,
        name: 'James Hampton',
        acted_in: [7],
        personifies: [99]
    },
    {
        _id: 99,
        name: 'Jean-Pierre Kalfon',
        acted_in: [7],
        personifies: [100]
    },
    {
        _id: 100,
        name: 'Vernon Dobtcheff',
        acted_in: [7],
        personifies: [102]
    },
    {
        _id: 101,
        name: 'Robert Arden',
        acted_in: [7],
        personifies: [103]
    },
    {
        _id: 102,
        name: 'Peter MacNicol',
        acted_in: [8],
        personifies: [104]
    },
    {
        _id: 103,
        name: 'Caitlin Clarke',
        acted_in: [8],
        personifies: [105]
    },
    {
        _id: 104,
        name: 'Ralph Richardson',
        acted_in: [8],
        personifies: [106]
    },
    {
        _id: 105,
        name: 'John Hallam',
        acted_in: [8],
        personifies: [107]
    },
    {
        _id: 106,
        name: 'Peter Eyre',
        acted_in: [8],
        personifies: [108]
    },
    {
        _id: 107,
        name: 'Albert Salmi',
        acted_in: [8],
        personifies: [109]
    },
    {
        _id: 108,
        name: 'Sydney Bromley',
        acted_in: [8],
        personifies: [110]
    },
    {
        _id: 109,
        name: 'Chloe Salaman',
        acted_in: [8],
        personifies: [111]
    },
    {
        _id: 110,
        name: 'Emrys James',
        acted_in: [8],
        personifies: [112]
    },
    {
        _id: 111,
        name: 'Roger Kemp',
        acted_in: [8],
        personifies: [113]
    },
    {
        _id: 112,
        name: 'Ian McDiarmid',
        acted_in: [8],
        personifies: [114]
    },
    {
        _id: 113,
        name: 'Ken Shorter',
        acted_in: [8],
        personifies: [115]
    },
	 {
        _id: 114,
        name: 'Jason White',
        acted_in: [8],
        personifies: [116]
    },
    {
        _id: 115,
        name: 'Yolande Palfrey',
        acted_in: [8],
        personifies: [117]
    },
	 {
        _id: 116,
        name: 'Douglas Cooper',
        acted_in: [8],
        personifies: [118]
    },
	 {
        _id: 117,
        name: 'Bill Cosby',
        acted_in: [9],
        personifies: [120]
    },
	 {
        _id: 118,
        name: 'Susan Anspach',
        acted_in: [9],
        personifies: [121]
    },
	 {
        _id: 119,
        name: 'Adam Rich',
        acted_in: [9],
        personifies: [122]
    },
	 {
        _id: 120,
        name: 'Julie Budd',
        acted_in: [9],
        personifies: [123]
    },
	 {
        _id: 121,
        name: 'Sonny Shroyer',
        acted_in: [9],
        personifies: [124]
    },
	 {
        _id: 122,
        name: 'David Knell',
        acted_in: [9],
        personifies: [125]
    },
	 {
        _id: 123,
        name: 'Chuck Shamata',
        acted_in: [9],
        personifies: [126]
    },
	 {
        _id: 124,
        name: 'Deborah Baltzell',
        acted_in: [9],
        personifies: [127]
    },
	 {
        _id: 125,
        name: 'Ronnie Schell',
        acted_in: [9],
        personifies: [128]
    },
	 {
        _id: 126,
        name: 'Jeannie Wilson',
        acted_in: [9],
        personifies: [129]
    },
	 {
        _id: 127,
        name: 'Stanley Brock',
        acted_in: [9],
        personifies: [130]
    },
	 {
        _id: 128,
        name: 'Ted Zeigler',
        acted_in: [9],
        personifies: [131]
    },
	 {
        _id: 129,
        name: 'Vic Dunlop',
        acted_in: [9],
        personifies: [132]
    },
	 {
        _id: 130,
        name: 'Reggie Nalder',
        acted_in: [9],
        personifies: [133]
    },
    {
        _id: 131,
        name: 'Mickey Rooney',
        acted_in: [10],
        personifies: [134]
    },
	 {
        _id: 132,
        name: 'Kurt Russell',
        acted_in: [10],
        personifies: [135]
    },
	 {
        _id: 133,
        name: 'Pearl Bailey',
        acted_in: [10],
        personifies: [136]
    },
	 {
        _id: 134,
        name: 'Jack Albertson',
        acted_in: [10],
        personifies: [137]
    },
	 {
        _id: 135,
        name: 'Sandy Duncan',
        acted_in: [10],
        personifies: [138]
    },
	 {
        _id: 136,
        name: 'Jeanette Nolan',
        acted_in: [10],
        personifies: [139]
    },
	 {
        _id: 137,
        name: 'Pat Buttram',
        acted_in: [10],
        personifies: [140]
    },
	 {
        _id: 138,
        name: 'John McIntire',
        acted_in: [10],
        personifies: [142]
    },
	 {
        _id: 139,
        name: 'Richard Bakalyan',
        acted_in: [10],
        personifies: [143]
    },
	 {
        _id: 140,
        name: 'Paul Winchell',
        acted_in: [10],
        personifies: [144]
    },
	 {
        _id: 141,
        name: 'Keith Coogan',
        acted_in: [10],
        personifies: [145]
    },
	 {
        _id: 142,
        name: 'Corey Feldman',
        acted_in: [10],
        personifies: [146]
    },
 	 {
        _id: 143,
        name: 'Squeeks the Caterpillar',
        acted_in: [10],
        personifies: [147]
    },
	 {
        _id: 144,
        name: 'John Hurt',
        acted_in: [11],
        personifies: [148]
    },
	 {
        _id: 145,
        name: 'Jane Alexander',
        acted_in: [11],
        personifies: [149]
    },
	 {
        _id: 146,
        name: 'Doug McKeon',
        acted_in: [11],
        personifies: [150]
    },
	 {
        _id: 147,
        name: 'Keith McKeon',
        acted_in: [11],
        personifies: [151]
    },
	 {
        _id: 148,
        name: 'Beau Bridges',
        acted_in: [11],
        personifies: [152]
    },
	 {
        _id: 149,
        name: 'Glynnis O Connor',
        acted_in: [11],
        personifies: [153]
    },
	 {
        _id: 150,
        name: 'Geoffrey Liesik',
        acted_in: [11],
        personifies: [154]
    },
 	 {
        _id: 151,
        name: 'Michael Liesik',
        acted_in: [11],
        personifies: [155]
    },
	 {
        _id: 152,
        name: 'Ian Bannen',
        acted_in: [11],
        personifies: [156]
    },
	 {
        _id: 153,
        name: 'Anne Stallybrass',
        acted_in: [11],
        personifies: [157]
    },
	 {
        _id: 154,
        name: 'Matthew Taylor',
        acted_in: [11],
        personifies: [158]
    },
 	 {
        _id: 155,
        name: 'Klaus Lowitsch',
        acted_in: [11],
        personifies: [159]
    },
	 {
        _id: 156,
        name: 'Gunter Meisner',
        acted_in: [11],
        personifies: [160]
    },
	 {
        _id: 157,
        name: 'Sky du Mont',
        acted_in: [11],
        personifies: [161]
    },
	 {
        _id: 158,
        name: 'Jan Niklas',
        acted_in: [11],
        personifies: [162]
    },
	 {
        _id: 159,
        name: 'Jeff Bridges',
        acted_in: [12],
        personifies: [163]
    },
 	 {
        _id: 160,
        name: 'Bruce Boxleitner',
        acted_in: [12],
        personifies: [164]
    },
	 {
        _id: 161,
        name: 'David Warner',
        acted_in: [12],
        personifies: [165]
    },
	 {
        _id: 162,
        name: 'Cindy Morgan',
        acted_in: [12],
        personifies: [166]
    },
	 {
        _id: 163,
        name: 'Barnard Hughes',
        acted_in: [12],
        personifies: [167]
    },
 	 {
        _id: 164,
        name: 'Dan Shor',
        acted_in: [12],
        personifies: [168]
    },
	 {
        _id: 165,
        name: 'Peter Jurasik',
        acted_in: [12],
        personifies: [169]
    },
	 {
        _id: 166,
        name: 'Tony Stephano',
        acted_in: [12],
        personifies: [170]
    },
	 {
        _id: 167,
        name: 'Craig Chudy',
        acted_in: [12],
        personifies: [171]
    },
 	 {
        _id: 168,
        name: 'Vince Deadrick Jr.',
        acted_in: [12],
        personifies: [172]
    },
	 {
        _id: 169,
        name: 'Sam Schatz',
        acted_in: [12],
        personifies: [173]
    },
	 {
        _id: 170,
        name: 'Jackson Bostwick',
        acted_in: [12],
        personifies: [174]
    },
	 {
        _id: 171,
        name: 'David S. Cass Sr.',
        acted_in: [12],
        personifies: [175]
    },
 	 {
        _id: 172,
        name: 'Gerald Berns',
        acted_in: [12],
        personifies: [176]
    },
	 {
        _id: 173,
        name: 'Bob Neill',
        acted_in: [12],
        personifies: [177]
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

