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
        personified_by: [92]
    },
    {
        _id: 94,
        name: 'Caroline Chapman',
        appear_in: [6],
        personified_by: [93]
    },
 	 {
        _id: 95,
        name: 'Mrs. Lindey',
        appear_in: [6],
        personified_by: [94]
    },
    {
        _id: 96,
        name: 'Woody Wilkins',
        appear_in: [7],
        personified_by: [95]
    },
    {
        _id: 97,
        name: 'Krokov',
        appear_in: [7],
        personified_by: [96]
    },
    {
        _id: 98,
        name: 'Natalia',
        appear_in: [7],
        personified_by: [97]
    },
    {
        _id: 99,
        name: 'Harry Oslo',
        appear_in: [7],
        personified_by: [98]
    },
    {
        _id: 100,
        name: 'Morovich',
        appear_in: [7],
        personified_by: [99]
    },
    {
        _id: 101,
        name: 'Russ Devlin',
        appear_in: [7],
        personified_by: [24]
    },
    {
        _id: 102,
        name: 'Russian Agent',
        appear_in: [7],
        personified_by: [100]
    },
    {
        _id: 103,
        name: 'CIA Chief',
        appear_in: [7],
        personified_by: [101]
    },
    {
        _id: 104,
        name: 'Galen',
        appear_in: [8],
        personified_by: [102]
    },
    {
        _id: 105,
        name: 'Valerian',
        appear_in: [8],
        personified_by: [103]
    },
    {
        _id: 106,
        name: 'Ulrich',
        appear_in: [8],
        personified_by: [104]
    },
    {
        _id: 107,
        name: 'Tyrian',
        appear_in: [8],
        personified_by: [105]
    },
    {
        _id: 108,
        name: 'Casiodorus Rex',
        appear_in: [8],
        personified_by: [106]
    },
    {
        _id: 109,
        name: 'Greil',
        appear_in: [8],
        personified_by: [107]
    },
    {
        _id: 110,
        name: 'Hodge',
        appear_in: [8],
        personified_by: [108]
    },
    {
        _id: 111,
        name: 'Princess Elspeth',
        appear_in: [8],
        personified_by: [109]
    },
    {
        _id: 112,
        name: 'Valerian Father',
        appear_in: [8],
        personified_by: [110]
    },
    {
        _id: 113,
        name: 'Horsrik',
        appear_in: [8],
        personified_by: [111]
    },
    {
        _id: 114,
        name: 'Brother Jacopus',
        appear_in: [8],
        personified_by: [112]
    },
    {
        _id: 115,
        name: 'Henchman',
        appear_in: [8],
        personified_by: [113]
    },
	 {
        _id: 116,
        name: 'Henchman',
        appear_in: [8],
        personified_by: [114]
    },
    {
        _id: 117,
        name: 'Victim',
        appear_in: [8],
        personified_by: [115]
    },
	 {
        _id: 118,
        name: 'Urlander',
        appear_in: [8],
        personified_by: [116]
    },
	 {
        _id: 119,
        name: 'Max Devlin',
        appear_in: [9],
        personified_by: [16]
    },
	 {
        _id: 120,
        name: 'Barney Satin',
        appear_in: [9],
        personified_by: [117]
    },
	 {
        _id: 121,
        name: 'Penny Hart',
        appear_in: [9],
        personified_by: [118]
    },
	 {
        _id: 122,
        name: 'Toby Hart',
        appear_in: [9],
        personified_by: [119]
    },
	 {
        _id: 123,
        name: 'Stella Summers',
        appear_in: [9],
        personified_by: [120]
    },
	 {
        _id: 124,
        name: 'Big Billy Hunniker',
        appear_in: [9],
        personified_by: [121]
    },
	 {
        _id: 125,
        name: 'Nerve Nordlinger',
        appear_in: [9],
        personified_by: [122]
    },
	 {
        _id: 126,
        name: 'Jerry Nadler',
        appear_in: [9],
        personified_by: [123]
    },
	 {
        _id: 127,
        name: 'Heidi',
        appear_in: [9],
        personified_by: [124]
    },
	 {
        _id: 128,
        name: 'Greg Weems',
        appear_in: [9],
        personified_by: [125]
    },
	 {
        _id: 129,
        name: 'Laverne Hunniker',
        appear_in: [9],
        personified_by: [126]
    },
	 {
        _id: 130,
        name: 'The Counterman',
        appear_in: [9],
        personified_by: [127]
    },
	 {
        _id: 131,
        name: 'Mr. Billings',
        appear_in: [9],
        personified_by: [128]
    },
	 {
        _id: 132,
        name: 'Brian',
        appear_in: [9],
        personified_by: [129]
    },
	 {
        _id: 133,
        name: 'Chairman of Devils Council',
        appear_in: [9],
        personified_by: [130]
    },
    {
        _id: 134,
        name: 'Tod (voice)',
        appear_in: [10],
        personified_by: [131]
    },
	 {
        _id: 135,
        name: 'Cooper (voice) ',
        appear_in: [10],
        personified_by: [132]
    },
	 {
        _id: 136,
        name: 'Big Mama (voice)',
        appear_in: [10],
        personified_by: [133]
    },
	 {
        _id: 137,
        name: 'Amos Slade (voice)',
        appear_in: [10],
        personified_by: [134]
    },
	 {
        _id: 138,
        name: 'Vixey (voice)',
        appear_in: [10],
        personified_by: [135]
    },
	 {
        _id: 139,
        name: 'Widow Tweed (voice)',
        appear_in: [10],
        personified_by: [136]
    },
	 {
        _id: 140,
        name: 'Chief (voice)',
        appear_in: [10],
        personified_by: [137]
    },
	 {
        _id: 141,
        name: 'Porcupine (voice)',
        appear_in: [10],
        personified_by: [56]
    },
	 {
        _id: 142,
        name: 'Badger (voice)',
        appear_in: [10],
        personified_by: [138]
    },
	 {
        _id: 143,
        name: 'Dinky (voice) (as Dick Bakalyan) ',
        appear_in: [10],
        personified_by: [139]
    },
	 {
        _id: 144,
        name: 'Boomer (voice)',
        appear_in: [10],
        personified_by: [140]
    },
	 {
        _id: 145,
        name: 'Young Tod (voice) (as Keith Mitchell)',
        appear_in: [10],
        personified_by: [141]
    },
 	 {
        _id: 146,
        name: 'Young Copper (voice)',
        appear_in: [10],
        personified_by: [142]
    },
 	 {
        _id: 147,
        name: 'Squeeks the Caterpillar',
        appear_in: [10],
        personified_by: [143]
    },
	 {
        _id: 148,
        name: 'Peter Strelzyk',
        appear_in: [11],
        personified_by: [144]
    },
	 {
        _id: 149,
        name: 'Doris Strelzyk',
        appear_in: [11],
        personified_by: [145]
    },
	 {
        _id: 150,
        name: 'Frank Strelzyk',
        appear_in: [11],
        personified_by: [146]
    },
	 {
        _id: 151,
        name: 'Fitscher Strelzyk',
        appear_in: [11],
        personified_by: [147]
    },
	 {
        _id: 152,
        name: 'Gunter Wetzel',
        appear_in: [11],
        personified_by: [148]
    },
	 {
        _id: 153,
        name: 'Petra Wetzel',
        appear_in: [11],
        personified_by: [149]
    },
	 {
        _id: 154,
        name: 'Little Peter Wetzel ',
        appear_in: [11],
        personified_by: [150]
    },
 	 {
        _id: 155,
        name: 'Andreas Wetzel',
        appear_in: [11],
        personified_by: [151]
    },
	 {
        _id: 156,
        name: 'Josef Keller',
        appear_in: [11],
        personified_by: [152]
    },
	 {
        _id: 157,
        name: 'Magda Keller',
        appear_in: [11],
        personified_by: [153]
    },
	 {
        _id: 158,
        name: 'Lukas Keller',
        appear_in: [11],
        personified_by: [154]
    },
 	 {
        _id: 159,
        name: 'Schmolk',
        appear_in: [11],
        personified_by: [155]
    },
	 {
        _id: 160,
        name: 'Major Koerner',
        appear_in: [11],
        personified_by: [156]
    },
	 {
        _id: 161,
        name: 'Ziegler (as Sky Dumont)',
        appear_in: [11],
        personified_by: [157]
    },
	 {
        _id: 162,
        name: 'Lt. Fehler',
        appear_in: [11],
        personified_by: [158]
    },
	 {
        _id: 163,
        name: 'Kevin Flynn / Clu',
        acted_in: [12],
        personifies: [159]
    },
 	 {
        _id: 164,
        name: 'Alan Bradley / Tron',
        acted_in: [12],
        personifies: [160]
    },
	 {
        _id: 165,
        name: 'Ed Dillinger / Sark / Master Control Program',
        acted_in: [12],
        personifies: [161]
    },
	 {
        _id: 166,
        name: 'Lora / Yori',
        acted_in: [12],
        personifies: [162]
    },
	 {
        _id: 167,
        name: 'Dr. Walter Gibbs / Dumont',
        acted_in: [12],
        personifies: [163]
    },
 	 {
        _id: 168,
        name: 'Ram / Popcorn Co-Worker',
        acted_in: [12],
        personifies: [164]
    },
	 {
        _id: 169,
        name: 'Crom',
        acted_in: [12],
        personifies: [165]
    },
	 {
        _id: 170,
        name: 'Peter / Sarks Lieutenant',
        acted_in: [12],
        personifies: [166]
    },
	 {
        _id: 171,
        name: 'Warrior 1',
        acted_in: [12],
        personifies: [167]
    },
 	 {
        _id: 172,
        name: 'Warrior 2',
        acted_in: [12],
        personifies: [168]
    },
	 {
        _id: 173,
        name: 'Expert Disc Warrior ',
        acted_in: [12],
        personifies: [169]
    },
	 {
        _id: 174,
        name: 'Head Guard',
        acted_in: [12],
        personifies: [170]
    },
	 {
        _id: 175,
        name: 'Factory Guard (as Dave Cass)',
        acted_in: [12],
        personifies: [171]
    },
 	 {
        _id: 176,
        name: 'Guard 1',
        acted_in: [12],
        personifies: [172]
    },
	 {
        _id: 177,
        name: 'Guard 2',
        acted_in: [12],
        personifies: [173]
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
