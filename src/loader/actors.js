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
        acted_in: [1,15],
        personifies: [2,207]
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
        acted_in: [2,9],
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
        acted_in: [2,7],
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
        acted_in: [3,6],
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
        acted_in: [3,10],
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
        acted_in: [10, 31],
        personifies: [145, 750]
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
        acted_in: [11,18],
        personifies: [153,247]
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
	 },
	 {
        _id: 174,
        name: 'Matt Dillon',
        acted_in: [13],
        personifies: [178]
    },
	 {
        _id: 175,
        name: 'Jim Metzler',
        acted_in: [13],
        personifies: [179]
    },
	 {
        _id: 176,
        name: 'Meg Tilly',
        acted_in: [13],
        personifies: [180]
    },
	 {
        _id: 177,
        name: 'Bill McKinney',
        acted_in: [13],
        personifies: [181]
    },
 	 {
        _id: 178,
        name: 'Frances Lee McCain',
        acted_in: [13],
        personifies: [182]
    },
	 {
        _id: 179,
        name: 'Ben Johnson',
        acted_in: [13],
        personifies: [183]
    },
	 {
        _id: 180,
        name: 'Emilio Estevez',
        acted_in: [13],
        personifies: [184]
    },
	 {
        _id: 181,
        name: 'Jack Thibeau',
        acted_in: [13],
        personifies: [185]
    },
 	 {
        _id: 182,
        name: 'Zeljko Ivanek',
        acted_in: [13],
        personifies: [186]
    },
	 {
        _id: 183,
        name: 'Tom Virtue',
        acted_in: [13],
        personifies: [187]
	 },
	 {
        _id: 184,
        name: 'Pamela Ludwig',
        acted_in: [13],
        personifies: [188]
    },
	 {
        _id: 185,
        name: 'Jeff Fleury',
        acted_in: [13],
        personifies: [189]
    },
	 {
        _id: 186,
        name: 'Suzanne Costollos',
        acted_in: [13],
        personifies: [190]
    },
	 {
        _id: 187,
        name: 'Marilyn Redfield',
        acted_in: [13],
        personifies: [191]
    },
 	 {
        _id: 188,
        name: 'Mark Arnott',
        acted_in: [13],
        personifies: [192]
    },
    {
        _id: 189,
        name: 'Jason Robards',
        acted_in: [14],
        personifies: [193]
    },
	 {
        _id: 190,
        name: 'Jonathan Pryce',
        acted_in: [14],
        personifies: [194]
    },
	 {
        _id: 191,
        name: 'Royal Dano',
        acted_in: [14],
        personifies: [195]
    },
 	 {
        _id: 192,
        name: 'Vidal Peterson',
        acted_in: [14],
        personifies: [196]
    },
	 {
        _id: 193,
        name: 'Shawn Carson',
        acted_in: [14],
        personifies: [197]
	 },
	 {
        _id: 194,
        name: 'Mary Grace Canfield',
        acted_in: [14],
        personifies: [198]
    },
	 {
        _id: 195,
        name: 'Richard Davalos',
        acted_in: [14],
        personifies: [199]
    },
	 {
        _id: 196,
        name: 'Jake Dengel',
        acted_in: [14],
        personifies: [200]
    },
	 {
        _id: 197,
        name: 'Jack Dodson',
        acted_in: [14],
        personifies: [201]
    },
 	 {
        _id: 198,
        name: 'Bruce M. Fischer',
        acted_in: [14],
        personifies: [202]
    },
    {
        _id: 199,
        name: 'Ellen Geer',
        acted_in: [14],
        personifies: [203]
    },
	 {
        _id: 200,
        name: 'Pam Grier',
        acted_in: [14],
        personifies: [204]
    },
	 {
        _id: 201,
        name: 'Brendan Klinger',
        acted_in: [14],
        personifies: [205]
    },
 	 {
        _id: 202,
        name: 'James Stacy',
        acted_in: [14],
        personifies: [206]
    },
	 {
        _id: 203,
        name: 'Brian Dennehy',
        acted_in: [15],
        personifies: [208]
	 },
	 {
        _id: 204,
        name: 'Zachary Ittimangnaq',
        acted_in: [15],
        personifies: [209]
    },
	 {
        _id: 205,
        name: 'Samson Jorah',
        acted_in: [15],
        personifies: [210]
    },
	 {
        _id: 206,
        name: 'Hugh Webster',
        acted_in: [15],
        personifies: [211]
    },
	 {
        _id: 207,
        name: 'Martha Ittimangnaq',
        acted_in: [15],
        personifies: [212]
    },
 	 {
        _id: 208,
        name: 'Tom Dahlgren',
        acted_in: [15],
        personifies: [213]
    },
    {
        _id: 209,
        name: 'Walker Stuart',
        acted_in: [15],
        personifies: [214]
    },
	 {
        _id: 210,
        name: 'Alan Young',
        acted_in: [16],
        personifies: [215]
    },
	 {
        _id: 211,
        name: 'Wayne Allwine',
        acted_in: [16],
        personifies: [216,217,218]
    },
 	 {
        _id: 212,
        name: 'Hal Smith',
        acted_in: [16],
        personifies: [219,220]
    },
	 {
        _id: 213,
        name: 'Will Ryan',
        acted_in: [16],
        personifies: [221,222,223,224,225]
    },
	 {
        _id: 214,
        name: 'Eddie Carroll',
        acted_in: [16],
        personifies: [226]
    },
	 {
        _id: 215,
        name: 'Patricia Parris',
        acted_in: [16],
        personifies: [227]
    },
	 {
        _id: 216,
        name: 'Clarence Nash',
        acted_in: [16],
        personifies: [228]
    },
	 {
        _id: 217,
        name: 'Margot Kidder',
        acted_in: [17],
        personifies: [229]
    },
 	 {
        _id: 218,
        name: 'Robert Hays',
        acted_in: [17],
        personifies: [230]
    },
    {
        _id: 219,
        name: 'David Suchet',
        acted_in: [17],
        personifies: [231]
    },
	 {
        _id: 220,
        name: 'Gila von Weitershausen',
        acted_in: [17],
        personifies: [232]
    },
	 {
        _id: 221,
        name: 'Daniel Faraldo',
        acted_in: [17],
        personifies: [233]
    },
 	 {
        _id: 222,
        name: 'Ronald Lacey',
        acted_in: [17],
        personifies: [234]
    },
	 {
        _id: 223,
        name: 'John Justin',
        acted_in: [17],
        personifies: [235]
    },
	 {
        _id: 224,
        name: 'Pauline Delaney',
        acted_in: [17],
        personifies: [236]
    },
	 {
        _id: 225,
        name: 'P.G. Stephens',
        acted_in: [17],
        personifies: [237]
    },
	 {
        _id: 226,
        name: 'Leopoldo Trieste',
        acted_in: [17],
        personifies: [238]
    },
	 {
        _id: 227,
        name: 'Brizio Montinaro',
        acted_in: [17],
        personifies: [239]
    },
	 {
        _id: 228,
        name: 'Martin Sorrentino',
        acted_in: [17],
        personifies: [240]
    },
	 {
        _id: 229,
        name: 'Luciano Crovato',
        acted_in: [17],
        personifies: [241]
    },
	 {
        _id: 230,
        name: 'Massimo Sarchielli',
        acted_in: [17],
        personifies: [242]
    },
	 {
        _id: 231,
        name: 'Jennifer Darling',
        acted_in: [17],
        personifies: [243]
    },
	 {
        _id: 232,
        name: 'Timothy Bottoms',
        acted_in: [18],
        personifies: [244]
    },
	 {
        _id: 233,
        name: 'Eva Marie Saint',
        acted_in: [18],
        personifies: [245]
    },
	 {
        _id: 234,
        name: 'Arthur Hill',
        acted_in: [18,20],
        personifies: [246,266]
    },
    {
        _id: 235,
        name: 'Susan Dey',
        acted_in: [18],
        personifies: [248]
    },
	 {
        _id: 236,
        name: 'Gerald Hiken',
        acted_in: [18],
        personifies: [249]
    },
    {
        _id: 237,
        name: 'George Wallace',
        acted_in: [18],
        personifies: [250]
    },
	 {
        _id: 238,
        name: 'Michael Anderson Jr.',
        acted_in: [18],
        personifies: [251]
    },
	 {
        _id: 239,
        name: 'Stephen Young',
        acted_in: [18],
        personifies: [252]
    },
 	 {
        _id: 240,
        name: 'Ralph Bellamy',
        acted_in: [18],
        personifies: [253]
    },
	 {
        _id: 241,
        name: 'Ernest Borgnine',
        acted_in: [18],
        personifies: [254]
    },
	 {
        _id: 242,
        name: 'Patricia Neal',
        acted_in: [18],
        personifies: [255]
    },
	 {
        _id: 243,
        name: 'Pilot',
        acted_in: [18],
        personifies: [256]
    },
	 {
        _id: 244,
        name: 'Richard Roat',
        acted_in: [18],
        personifies: [257]
    },
    {
        _id: 245,
        name: 'Richard Speight Jr.',
        acted_in: [18],
        personifies: [258]
    },
	 {
        _id: 246,
        name: 'Sab Shimono',
        acted_in: [19],
        personifies: [259]
    },
 	 {
        _id: 247,
        name: 'Erin Young',
        acted_in: [19],
        personifies: [260]
    },
 	 {
        _id: 248,
        name: 'Jon Harvey',
        acted_in: [19],
        personifies: [261]
    },
  	 {
        _id: 249,
        name: 'Larry Wright',
        acted_in: [19],
        personifies: [262]
    },
	 {
        _id: 250,
        name: 'Mary Steenburgen',
        acted_in: [20],
        personifies: [263]
    },
	 {
        _id: 251,
        name: 'Gary Basaraba',
        acted_in: [20],
        personifies: [264]
    },
	 {
        _id: 252,
        name: 'Harry Dean Stanton',
        acted_in: [20],
        personifies: [265]
    },
	 {
        _id: 253,
        name: 'Elisabeth Harnois',
        acted_in: [20],
        personifies: [267]
    },
	 {
        _id: 254,
        name: 'Robbie Magwood',
        acted_in: [20],
        personifies: [268]
    },
	 {
        _id: 255,
        name: 'Michelle Meyrink',
        acted_in: [20],
        personifies: [269]
    },
	 {
        _id: 256,
        name: 'Elias Koteas',
        acted_in: [20],
        personifies: [270]
    },
	 {
        _id: 257,
        name: 'Wayne Robson',
        acted_in: [20],
        personifies: [271]
    },
	 {
        _id: 258,
        name: 'Jan Rubes',
        acted_in: [20],
        personifies: [272]
    },
	 {
        _id: 259,
        name: 'Sarah Polley',
        acted_in: [20],
        personifies: [273]
    },
	 {
        _id: 260,
        name: 'Graham Jarvis',
        acted_in: [20],
        personifies: [274]
    },
 	 {
        _id: 261,
        name: 'Timothy Webber',
        acted_in: [20],
        personifies: [275]
    },
 	 {
        _id: 262,
        name: 'Joy Thompson',
        acted_in: [20],
        personifies: [276]
    },
 	 {
        _id: 263,
        name: 'John Friesen',
        acted_in: [20],
        personifies: [277]
    },
    {
        _id: 270,
        name: 'Grant Bardsley',
        acted_in: [21],
        personifies: [280]
    },
    {
        _id: 271,
        name: 'Susan Sheridan',
        acted_in: [21],
        personifies: [281]
    },
    {
        _id: 272,
        name: 'Freddie Jones',
        acted_in: [21],
        personifies: [282]
    },
    {
        _id: 273,
        name: 'Nigel Hawthorne',
        acted_in: [21],
        personifies: [283]
    },
    {
        _id: 274,
        name: 'Arthur Malet',
        acted_in: [21],
        personifies: [284]
    },
    {
        _id: 275,
        name: 'John Byner',
        acted_in: [21],
        personifies: [285]
    },
    {
        _id: 276,
        name: 'Lindsay Rich',
        acted_in: [21],
        personifies: [286]
    },
    {
        _id: 300,
        name: 'Fairuza Balk',
        acted_in: [22],
        personifies: [300]
    },
    {
        _id: 301,
        name: 'Nicol Williamson',
        acted_in: [22],
        personifies: [301]
    },
    {
        _id: 302,
        name: 'Jean Marsh',
        acted_in: [22],
        personifies: [302]
    },
    {
        _id: 303,
        name: 'Piper Laurie',
        acted_in: [22],
        personifies: [303]
    },
    {
        _id: 304,
        name: 'Matt Clark',
        acted_in: [22],
        personifies: [304]
    },
    {
        _id: 305,
        name: 'Michael Sundin',
        acted_in: [22],
        personifies: [305]
    },
    {
        _id: 350,
        name: 'Meredith Salenger',
        acted_in: [23],
        personifies: [350]
    },
    {
        _id: 351,
        name: 'John Cusack',
        acted_in: [23],
        personifies: [351]
    },
    {
        _id: 352,
        name: 'Ray Wise',
        acted_in: [23],
        personifies: [352]
    },
    {
        _id: 353,
        name: 'Lainie Kazan',
        acted_in: [23],
        personifies: [353]
    },
    {
        _id: 354,
        name: 'Scatman Crothers',
        acted_in: [23],
        personifies: [354]
    },
    {
        _id: 355,
        name: 'Barry Miller',
        acted_in: [23],
        personifies: [355]
    },
    {
        _id: 400,
        name: 'Joey Cramer',
        acted_in: [24],
        personifies: [400]
    },
    {
        _id: 401,
        name: 'Paul Reubens',
        acted_in: [24],
        personifies: [401]
    },
    {
        _id: 402,
        name: 'Cliff De Young',
        acted_in: [24],
        personifies: [402]
    },
    {
        _id: 403,
        name: 'Veronica Cartwright',
        acted_in: [24],
        personifies: [403]
    },
    {
        _id: 404,
        name: 'Sarah Jessica Parker',
        acted_in: [24],
        personifies: [404]
    },
    {
        _id: 405,
        name: 'Albie Whitaker',
        acted_in: [24],
        personifies: [405]
    },
    {
        _id: 450,
        name: 'Vincent Price',
        acted_in: [25],
        personifies: [450]
    },
    {
        _id: 451,
        name: 'Barrie Ingham',
        acted_in: [25],
        personifies: [451]
    },
    {
        _id: 452,
        name: 'Val Bettin',
        acted_in: [25],
        personifies: [452]
    },
    {
        _id: 453,
        name: 'Susanne Pollatschek',
        acted_in: [25],
        personifies: [453]
    },
    {
        _id: 454,
        name: 'Candy Candido',
        acted_in: [25],
        personifies: [454]
    },
    {
        _id: 455,
        name: 'Diana Chesney',
        acted_in: [25],
        personifies: [455]
    },
    {
        _id: 500,
        name: 'Benji',
        acted_in: [26],
        personifies: [500]
    },
    {
        _id: 501,
        name: 'Frank Inn',
        acted_in: [26],
        personifies: [501]
    },
    {
        _id: 502,
        name: 'Red Steagall',
        acted_in: [26],
        personifies: [502]
    },
    {
        _id: 503,
        name: 'Nancy Francis',
        acted_in: [26],
        personifies: [503]
    },
    {
        _id: 550,
        name: 'Jon Lovitz',
        acted_in: [27],
        personifies: [550]
    },
    {
        _id: 551,
        name: 'Timothy Stack',
        acted_in: [27],
        personifies: [551]
    },
    {
        _id: 552,
        name: 'Timothy E. Day',
        acted_in: [27],
        personifies: [552]
    },
    {
        _id: 553,
        name: 'Thurl Ravenscroft',
        acted_in: [27],
        personifies: [553]
    },
    {
        _id: 600,
        name: 'Tom Burlinson',
        acted_in: [28],
        personifies: [600]
    },
    {
        _id: 601,
        name: 'Sigrid Thornton',
        acted_in: [28],
        personifies: [601]
    },
    {
        _id: 602,
        name: 'Brian Dennehy',
        acted_in: [28],
        personifies: [602]
    },
    {
        _id: 603,
        name: 'Nicholas Eadie',
        acted_in: [28],
        personifies: [603]
    },
    {
        _id: 650,
        name: 'Joey Lawrence',
        acted_in: [29],
        personifies: [650]
    },
    {
        _id: 651,
        name: 'Billy Joel',
        acted_in: [29],
        personifies: [651]
    },
    {
        _id: 652,
        name: 'Cheech Marin',
        acted_in: [29],
        personifies: [652]
    },
    {
        _id: 653,
        name: 'Richard Mulligan',
        acted_in: [29],
        personifies: [653]
    },
    {
        _id: 700,
        name: 'Rick Moranis',
        acted_in: [30],
        personifies: [700]
    },
    {
        _id: 701,
        name: 'Matt Frewer',
        acted_in: [30],
        personifies: [701]
    },
    {
        _id: 702,
        name: 'Marcia Strassman',
        acted_in: [30],
        personifies: [702]
    },
    {
        _id: 703,
        name: 'Kristine Sutherland',
        acted_in: [30],
        personifies: [703]
    },
    {
        _id: 751,
        name: 'Lucy Deakins',
        acted_in: [31],
        personifies: [751]
    },
    {
        _id: 752,
        name: 'Colin Mothupi',
        acted_in: [31],
        personifies: [752]
    },
    {
        _id: 753,
        name: 'Timothy Landfield',
        acted_in: [31],
        personifies: [753]
    },
    {
        _id: 800,
        name: 'Jodi Benson',
        acted_in: [32],
        personifies: [800]
    },
    {
        _id: 801,
        name: 'Rene Auberjonois',
        acted_in: [32],
        personifies: [801]
    },
    {
        _id: 802,
        name: 'Christopher Daniel Barnes',
        acted_in: [32],
        personifies: [802]
    },
    {
        _id: 803,
        name: 'Pat Carroll',
        acted_in: [32],
        personifies: [803]
    },
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

