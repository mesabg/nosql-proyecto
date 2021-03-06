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
    },
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
    },
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
        appear_in: [12],
        personified_by: [159]
    },
 	 {
        _id: 164,
        name: 'Alan Bradley / Tron',
        appear_in: [12],
        personified_by: [160]
    },
	 {
        _id: 165,
        name: 'Ed Dillinger / Sark / Master Control Program',
        appear_in: [12],
        personified_by: [161]
    },
	 {
        _id: 166,
        name: 'Lora / Yori',
        appear_in: [12],
        personified_by: [162]
    },
	 {
        _id: 167,
        name: 'Dr. Walter Gibbs / Dumont',
        appear_in: [12],
        personified_by: [163]
    },
 	 {
        _id: 168,
        name: 'Ram / Popcorn Co-Worker',
        appear_in: [12],
        personified_by: [164]
    },
	 {
        _id: 169,
        name: 'Crom',
        appear_in: [12],
        personified_by: [165]
    },
	 {
        _id: 170,
        name: 'Peter / Sarks Lieutenant',
        appear_in: [12],
        personified_by: [166]
    },
	 {
        _id: 171,
        name: 'Warrior 1',
        appear_in: [12],
        personified_by: [167]
    },
 	 {
        _id: 172,
        name: 'Warrior 2',
        appear_in: [12],
        personified_by: [168]
    },
	 {
        _id: 173,
        name: 'Expert Disc Warrior ',
        appear_in: [12],
        personified_by: [169]
    },
	 {
        _id: 174,
        name: 'Head Guard',
        appear_in: [12],
        personified_by: [170]
    },
	 {
        _id: 175,
        name: 'Factory Guard (as Dave Cass)',
        appear_in: [12],
        personified_by: [171]
    },
 	 {
        _id: 176,
        name: 'Guard 1',
        appear_in: [12],
        personified_by: [172]
    },
	 {
        _id: 177,
        name: 'Guard 2',
        appear_in: [12],
        personified_by: [173]
	 },
	 {
        _id: 178,
        name: 'Tex McCormick',
        appear_in: [13],
        personified_by: [174]
    },
	 {
        _id: 179,
        name: 'Mason McCormick',
        appear_in: [13],
        personified_by: [175]
    },
	 {
        _id: 180,
        name: 'Jamie Collins',
        appear_in: [13],
        personified_by: [176]
    },
	 {
        _id: 181,
        name: 'Pop McCormick',
        appear_in: [13],
        personified_by: [177]
    },
 	 {
        _id: 182,
        name: 'Mrs. Johnson',
        appear_in: [13],
        personified_by: [178]
    },
	 {
        _id: 183,
        name: 'Cole Collins',
        appear_in: [13],
        personified_by: [179]
    },
	 {
        _id: 184,
        name: 'Johnny Collins',
        appear_in: [13],
        personified_by: [180]
    },
	 {
        _id: 185,
        name: 'Coach Jackson',
        appear_in: [13],
        personified_by: [181]
    },
 	 {
        _id: 186,
        name: 'Hitchhiker',
        appear_in: [13],
        personified_by: [182]
    },
	 {
        _id: 187,
        name: 'Bob Collins',
        appear_in: [13],
        personified_by: [183]
	 },
	 {
        _id: 188,
        name: 'Connie',
        appear_in: [13],
        personified_by: [184]
    },
	 {
        _id: 189,
        name: 'Roger',
        appear_in: [13],
        personified_by: [185]
    },
	 {
        _id: 190,
        name: 'Fortune Teller (as Suzanne Costallos)',
        appear_in: [13],
        personified_by: [186]
    },
	 {
        _id: 191,
        name: 'Ms. Carlson',
        appear_in: [13],
        personified_by: [187]
    },
 	 {
        _id: 192,
        name: 'Kelly',
        appear_in: [13],
        personified_by: [188]
    },
    {
        _id: 193,
        name: 'Charles Halloway',
        appear_in: [14],
        personified_by: [189]
    },
	 {
        _id: 194,
        name: 'Mr. Dark',
        appear_in: [14],
        personified_by: [190]
    },
	 {
        _id: 195,
        name: 'Tom Fury',
        appear_in: [14],
        personified_by: [191]
    },
 	 {
        _id: 196,
        name: 'Will Halloway',
        appear_in: [14],
        personified_by: [192]
    },
	 {
        _id: 197,
        name: 'Jim Nightshade',
        appear_in: [14],
        personified_by: [193]
	 },
	 {
        _id: 198,
        name: 'Miss Foley',
        appear_in: [14],
        personified_by: [194]
    },
	 {
        _id: 199,
        name: 'Mr. Crosetti',
        appear_in: [14],
        personified_by: [195]
    },
	 {
        _id: 200,
        name: 'Mr. Tetley',
        appear_in: [14],
        personified_by: [196]
    },
	 {
        _id: 201,
        name: 'Dr. Douglas',
        appear_in: [14],
        personified_by: [197]
    },
 	 {
        _id: 202,
        name: 'Mr. Cooger',
        appear_in: [14],
        personified_by: [198]
    },
    {
        _id: 203,
        name: 'Mrs. Halloway',
        appear_in: [14],
        personified_by: [199]
    },
	 {
        _id: 204,
        name: 'Dust Witch',
        appear_in: [14],
        personified_by: [200]
    },
	 {
        _id: 205,
        name: 'Cooger as a Child',
        appear_in: [14],
        personified_by: [201]
    },
 	 {
        _id: 206,
        name: 'Ed, The Bartender',
        appear_in: [14],
        personified_by: [202]
    },
	 {
        _id: 207,
        name: 'Farley Mowat / Tyler',
        appear_in: [15],
        personified_by: [2]
	 },
	 {
        _id: 208,
        name: 'Rosie',
        appear_in: [15],
        personified_by: [203]
    },
	 {
        _id: 209,
        name: 'Ootek',
        appear_in: [15],
        personified_by: [204]
    },
	 {
        _id: 210,
        name: 'Mike',
        appear_in: [15],
        personified_by: [205]
    },
	 {
        _id: 211,
        name: 'Drunk',
        appear_in: [15],
        personified_by: [206]
    },
 	 {
        _id: 212,
        name: 'Woman',
        appear_in: [15],
        personified_by: [207]
    },
    {
        _id: 213,
        name: 'Hunter 1',
        appear_in: [15],
        personified_by: [208]
    },
	 {
	      _id: 214,
        name: 'Hunter 2',
        appear_in: [15],
        personified_by: [209]
    },
	 {
        _id: 215,
        name: 'Scrooge - Scrooge McDuck (voice)',
        appear_in: [16],
        personified_by: [210]
    },
	 {
        _id: 216,
        name: 'Bob Cratchit - Mickey Mouse',
        appear_in: [16],
        personified_by: [211]
    },
	 {
        _id: 217,
        name: 'Weasel Gravedigger',
        appear_in: [16],
        personified_by: [211]
    },
	 {
        _id: 218,
        name: 'Begger Dog (voice)',
        appear_in: [16],
        personified_by: [211]
    },
 	 {
        _id: 219,
        name: 'Jacob Marleys Ghost - Goofy',
        appear_in: [16],
        personified_by: [212]
    },
	 {
        _id: 220,
        name: 'Collector for the Poor 1 (voice)',
        appear_in: [16],
        personified_by: [212]
    },
	 {
        _id: 221,
        name: 'Collector for the Poor 2',
        appear_in: [16],
        personified_by: [213]
    },
 	 {
        _id: 222,
        name: 'Ghost of Christmas Present (Willie the Giant)',
        appear_in: [16],
        personified_by: [213]
    },
	 {
        _id: 223,
        name: 'Ghost of Christmas Future (Pete)',
        appear_in: [16],
        personified_by: [213]
    },
	 {
        _id: 224,
        name: 'Santa Claus (Big Bad Wolf)',
        appear_in: [16],
        personified_by: [213]
    },
	 {
        _id: 225,
        name: 'Weasel 2 (voice)',
        appear_in: [16],
        personified_by: [213]
    },
	 {
        _id: 226,
        name: 'Ghost of Christmas Past - Jiminy Cricket (voice) (as Eddy Carroll)',
        appear_in: [16],
        personified_by: [214]
    },
	 {
        _id: 227,
        name: 'Belle - Daisy Duck (voice) Dick Billingsley 	Tiny Tim (voice)',
        appear_in: [16],
        personified_by: [215]
    },
	 {
        _id: 228,
        name: 'Nephew Fred - Donald Duck (voice)',
        appear_in: [16],
        personified_by: [216]
    },
	 {
        _id: 229,
        name: 'Mickey Raymond',
        appear_in: [17],
        personified_by: [217]
    },
 	 {
        _id: 230,
        name: 'Terry Leonard',
        appear_in: [17],
        personified_by: [218]
    },
	 {
        _id: 231,
        name: 'Inspector Stagnos',
        appear_in: [17],
        personified_by: [219]
    },
	 {
        _id: 232,
        name: 'Eva Werner',
        appear_in: [17],
        personified_by: [220]
    },
	 {
        _id: 233,
        name: 'Nino Tenucci',
        appear_in: [17],
        personified_by: [221]
    },
	 {
        _id: 234,
        name: 'Princess Aida',
        appear_in: [17],
        personified_by: [222]
    },
	 {
        _id: 235,
        name: 'Marquis De Pena',
        appear_in: [17],
        personified_by: [223]
    },
	 {
        _id: 236,
        name: 'Lizzy O Reilly (as Pauline Delany)',
        appear_in: [17],
        personified_by: [224]
    },
	 {
        _id: 237,
        name: 'Sean O Reilly',
        appear_in: [17],
        personified_by: [225]
    },
	 {
        _id: 238,
        name: 'Esteban Ortega',
        appear_in: [17],
        personified_by: [226]
    },
	 {
        _id: 239,
        name: 'Corporal Lascaris',
        appear_in: [17],
        personified_by: [227]
    },
	 {
        _id: 240,
        name: 'Afro-Dite',
        appear_in: [17],
        personified_by: [228]
    },
	 {
        _id: 241,
        name: 'Taxi Driver',
        appear_in: [17],
        personified_by: [229]
    },
	 {
        _id: 242,
        name: 'Boos Arab',
        appear_in: [17],
        personified_by: [230]
    },
	 {
        _id: 243,
        name: 'Laurie',
        appear_in: [17],
        personified_by: [231]
    },
    {
        _id: 244,
        name: 'Morris Frank',
        appear_in: [18],
        personified_by: [232]
    },
	 {
        _id: 245,
        name: 'Mrs. Eustes',
        appear_in: [18],
        personified_by: [233]
    },
	 {
        _id: 246,
        name: 'Mr. Frank',
        appear_in: [18],
        personified_by: [234]
    },
    {
        _id: 247,
        name: 'Lois',
        appear_in: [18],
        personified_by: [149]
    },
	 {
        _id: 248,
        name: 'Beth',
        appear_in: [18],
        personified_by: [235]
    },
    {
        _id: 249,
        name: 'Jack',
        appear_in: [18],
        personified_by: [236]
    },
	 {
        _id: 250,
        name: 'Blind Institute Director (as George D. Wallace)',
        appear_in: [18],
        personified_by: [237]
    },
	 {
        _id: 251,
        name: 'Hank',
        appear_in: [18],
        personified_by: [238]
    },
 	 {
        _id: 252,
        name: 'Mike McShane',
        appear_in: [18],
        personified_by: [239]
    },
	 {
        _id: 253,
        name: 'Sen. Christi',
        appear_in: [18],
        personified_by: [240]
    },
	 {
        _id: 254,
        name: 'Sen. Brighton',
        appear_in: [18],
        personified_by: [241]
    },
	 {
        _id: 255,
        name: 'Mrs. Frank',
        appear_in: [18],
        personified_by: [242]
    },
	 {
        _id: 256,
        name: 'Buddy',
        appear_in: [18],
        personified_by: [243]
    },
    {
        _id: 257,
        name: 'Proprietor',
        appear_in: [18],
        personified_by: [244]
    },
	 {
        _id: 258,
        name: 'Jimmy',
        appear_in: [18],
        personified_by: [245]
    },
 	 {
        _id: 259,
        name: 'Kenji, the Designer',
        appear_in: [19],
        personified_by: [246]
    },
 	 {
        _id: 260,
        name: 'Robin',
        appear_in: [19],
        personified_by: [247]
    },
 	 {
        _id: 261,
        name: 'Peepers',
        appear_in: [19],
        personified_by: [248]
    },
  	 {
        _id: 262,
        name: 'Zoom',
        appear_in: [19],
        personified_by: [249]
    },
	 {
        _id: 263,
        name: 'Ginny Grainger',
        appear_in: [20],
        personified_by: [250]
    },
	 {
        _id: 264,
        name: 'Jack Grainger',
        appear_in: [20],
        personified_by: [251]
    },
	 {
        _id: 265,
        name: 'Gideon',
        appear_in: [20],
        personified_by: [252]
    },
	 {
        _id: 266,
        name: 'Caleb Grainger',
        appear_in: [20],
        personified_by: [234]
    },
	 {
        _id: 267,
        name: 'Abbie Grainger (as Elizabeth Harnois) ',
        appear_in: [20],
        personified_by: [253]
    },
	 {
        _id: 268,
        name: 'Cal Grainger',
        appear_in: [20],
        personified_by: [254]
    },
	 {
        _id: 269,
        name: 'Betty',
        appear_in: [20],
        personified_by: [255]
    },
	 {
        _id: 270,
        name: 'Eddie',
        appear_in: [20],
        personified_by: [256]
    },
	 {
        _id: 271,
        name: 'Harry Dickens',
        appear_in: [20],
        personified_by: [257]
    },
	 {
        _id: 272,
        name: 'Santa Claus',
        appear_in: [20],
        personified_by: [258]
    },
	 {
        _id: 273,
        name: 'Molly Monaghan',
        appear_in: [20],
        personified_by: [259]
    },
 	 {
        _id: 274,
        name: 'Frank Crump',
        appear_in: [20],
        personified_by: [260]
    },
 	 {
        _id: 275,
        name: 'Herbie Conklin',
        appear_in: [20],
        personified_by: [261]
    },
 	 {
        _id: 276,
        name: 'Mrs. Monaghan (as Joy Thompson-Allen)',
        appear_in: [20],
        personified_by: [262]
    },
 	 {
        _id: 277,
        name: 'Mr. Noonan',
        appear_in: [20],
        personified_by: [263]
    },
    {
        _id: 280,
        name: 'Taran',
        appear_in: [21],
        personified_by: [270]
    },
    {
        _id: 281,
        name: 'Eilonwy',
        appear_in: [21],
        personified_by: [271]
    },
    {
        _id: 282,
        name: 'Dallben',
        appear_in: [21],
        personified_by: [272]
    },
    {
        _id: 283,
        name: 'Fflewddur Fflam',
        appear_in: [21],
        personified_by: [273]
    },
    {
        _id: 284,
        name: 'King Eidilleg',
        appear_in: [21],
        personified_by: [274]
    },
    {
        _id: 285,
        name: 'Gurgi',
        appear_in: [21],
        personified_by: [275]   
    },
    {
        _id: 286,
        name: 'Lindsay Rich',
        appear_in: [21],
        personified_by: [276]
    },
    {
        _id: 300,
        name: 'Dorothy',
        appear_in: [22],
        personified_by: [300]
    },
    {
        _id: 301,
        name: 'Dr. Worley',
        appear_in: [22],
        personified_by: [301]
    },
    {
        _id: 302,
        name: 'Nurse Wilson',
        appear_in: [22],
        personified_by: [302]
    },
    {
        _id: 303,
        name: 'Aunt Em',
        appear_in: [22],
        personified_by: [303]
    },
    {
        _id: 304,
        name: 'Uncle Henry',
        appear_in: [22],
        personified_by: [304]
    },
    {
        _id: 305,
        name: 'Tik-Tok',
        appear_in: [22],
        personified_by: [305]
    },
    {
        _id: 350,
        name: 'Natty Gann',
        appear_in: [23],
        personified_by: [350]
    },
    {
        _id: 351,
        name: 'Harry',
        appear_in: [23],
        personified_by: [351]
    },
    {
        _id: 352,
        name: 'Sol Gann',
        appear_in: [23],
        personified_by: [352]
    },
    {
        _id: 353,
        name: 'Connie Gann',
        appear_in: [23],
        personified_by: [353]
    },
    {
        _id: 354,
        name: 'Sherman',
        appear_in: [23],
        personified_by: [354]
    },
    {
        _id: 355,
        name: 'Parker',
        appear_in: [23],
        personified_by: [355]
    },
    {
        _id: 400,
        name: 'David Freeman',
        appear_in: [24],
        personified_by: [400]
    },
    {
        _id: 401,
        name: 'Paul Mall',
        appear_in: [24],
        personified_by: [401]
    },
    {
        _id: 402,
        name: 'Bill Freeman',
        appear_in: [24],
        personified_by: [402]
    },
    {
        _id: 403,
        name: 'Helen Freeman',
        appear_in: [24],
        personified_by: [403]
    },
    {
        _id: 404,
        name: 'Carolyn McAdams',
        appear_in: [24],
        personified_by: [404]
    },
    {
        _id: 405,
        name: 'Jeff (8 years)',
        appear_in: [24],
        personified_by: [405]
    },
    {
        _id: 450,
        name: 'Professor Ratigan',
        appear_in: [25],
        personified_by: [450]
    },
    {
        _id: 451,
        name: 'Bartholomew',
        appear_in: [25],
        personified_by: [451]
    },
    {
        _id: 452,
        name: 'Thug Guard',
        appear_in: [25],
        personified_by: [452]
    },
    {
        _id: 453,
        name: 'Olivia Flaversham',
        appear_in: [25],
        personified_by: [453]
    },
    {
        _id: 454,
        name: 'Fidget',
        appear_in: [25],
        personified_by: [454]
    },
    {
        _id: 455,
        name: 'Mrs. Judson',
        appear_in: [25],
        personified_by: [455]
    },
    {
        _id: 500,
        name: 'Benji',
        appear_in: [26],
        personified_by: [500]
    },
    {
        _id: 501,
        name: 'Frank Inn',
        appear_in: [26],
        personified_by: [501]
    },
    {
        _id: 502,
        name: 'Red Steagall',
        appear_in: [26],
        personified_by: [502]
    },
    {
        _id: 503,
        name: 'Nancy Francis',
        appear_in: [26],
        personified_by: [503]
    },
    {
        _id: 550,
        name: 'Radio (voice)',
        appear_in: [27],
        personified_by: [550]
    },
    {
        _id: 551,
        name: 'Lampy',
        appear_in: [27],
        personified_by: [551]
    },
    {
        _id: 552,
        name: 'Blanky',
        appear_in: [27],
        personified_by: [552]
    },
    {
        _id: 553,
        name: 'Kirby',
        appear_in: [27],
        personified_by: [553]
    },
    {
        _id: 600,
        name: 'Jim Craig',
        appear_in: [28],
        personified_by: [600]
    },
    {
        _id: 601,
        name: 'Jessica',
        appear_in: [28],
        personified_by: [601]
    },
    {
        _id: 602,
        name: 'Harrison',
        appear_in: [28],
        personified_by: [602]
    },
    {
        _id: 603,
        name: 'Alistair Patton',
        appear_in: [28],
        personified_by: [603]
    },
    {
        _id: 650,
        name: 'Oliver',
        appear_in: [29],
        personified_by: [650]
    },
    {
        _id: 651,
        name: 'Dodger',
        appear_in: [29],
        personified_by: [651]
    },
    {
        _id: 652,
        name: 'Tito',
        appear_in: [29],
        personified_by: [652]
    },
    {
        _id: 653,
        name: 'Einstein',
        appear_in: [29],
        personified_by: [653]
    },
    {
        _id: 700,
        name: 'Wayne Szalinski',
        appear_in: [30],
        personified_by: [700]
    },
    {
        _id: 701,
        name: 'Big Russ Thompson',
        appear_in: [30],
        personified_by: [701]
    },
    {
        _id: 702,
        name: 'Diane Szalinski',
        appear_in: [30],
        personified_by: [702]
    },
    {
        _id: 703,
        name: 'Mae Thompson',
        appear_in: [30],
        personified_by: [703]
    },
    {
        _id: 750,
        name: 'Ted',
        appear_in: [31],
        personified_by: [141]
    },
    {
        _id: 751,
        name: 'Susan',
        appear_in: [31],
        personified_by: [751]
    },
    {
        _id: 752,
        name: 'Morogo',
        appear_in: [31],
        personified_by: [752]
    },
    {
        _id: 753,
        name: 'Earl Johnson',
        appear_in: [31],
        personified_by: [753]
    },
    {
        _id: 800,
        name: 'Ariel',
        appear_in: [32],
        personified_by: [800]
    },
    {
        _id: 801,
        name: 'Louis',
        appear_in: [32],
        personified_by: [801]
    },
    {
        _id: 802,
        name: 'Eric',
        appear_in: [32],
        personified_by: [802]
    },
    {
        _id: 803,
        name: 'Ursula',
        appear_in: [32],
        personified_by: [803]
    },
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
