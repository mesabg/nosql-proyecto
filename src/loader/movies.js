/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * Movies
 */
const movies = [
    {
        _id: 1,
        name:{
            spanish: 'Herbie Torero',
            original: 'Herbie Goes Bananas'
        },
        clasification: 'G',
        rating: 4.8,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: 'Herbie: The Love Bug',
        release: new Date(1980, 6, 25),
        genre: [
            'Adventure',
            'Comedy',
            'Family',
            'Fantasy'
        ],
        running_time: 100,
        gross: 18000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 1,
                actor_id: 1,
                role: 'main'
            },{
                character_id: 2,
                actor_id: 2,
                role: 'main'
            },{
                character_id: 3,
                actor_id: 3,
                role: 'antagonist'
            },{
                character_id: 4,
                actor_id: 4,
                role: 'main'
            },{
                character_id: 5,
                actor_id: 5,
                role: 'main'
            },{
                character_id: 6,
                actor_id: 6,
                role: 'antagonist'
            },{
                character_id: 7,
                actor_id: 7,
                role: 'secondary'
            },{
                character_id: 8,
                actor_id: 8,
                role: 'antagonist'
            },{
                character_id: 9,
                actor_id: 9,
                role: 'antagonist'
            },{
                character_id: 10,
                actor_id: 10,
                role: 'secondary'
            },{
                character_id: 11,
                actor_id: 11,
                role: 'secondary'
            },{
                character_id: 12,
                actor_id: 12,
                role: 'secondary'
            },{
                character_id: 13,
                actor_id: 13,
                role: 'secondary'
            },{
                character_id: 14,
                actor_id: 14,
                role: 'secondary'
            },{
                character_id: 15,
                actor_id: 15,
                role: 'secondary'
            }
        ],
        directed_by: [1],
        produced_by: [1, 2, 3],
        written_by: [1, 2],
        music_by: [1],
        nominated_in:[
            {
                category_id: 1,
                award_id: 1,
                won: false
            },
            {
                category_id: 2,
                award_id: 1,
                won: false
            }
        ]
    },
	 {
        _id: 2,
        name:{
            spanish: 'El ultimo vuelo del Arca de Noe',
            original: 'The Last Flight of Noahs Ark'
        },
        clasification: 'G',
        rating: 5.8,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1980, 6, 25),
        genre: [
            'Adventure'
        ],
        running_time: 97,
        gross: 11000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 16,
                actor_id: 16,
                role: 'main'
            },{
                character_id: 17,
                actor_id: 17,
                role: 'main'
            },{
                character_id: 18,
                actor_id: 18,
                role: 'main'
            },{
                character_id: 19,
                actor_id: 19,
                role: 'secondary'
            },{
                character_id: 20,
                actor_id: 20,
                role: 'main'
            },{
                character_id: 21,
                actor_id: 21,
                role: 'secondary'
            },{
                character_id: 22,
                actor_id: 22,
                role: 'secondary'
            },{
                character_id: 23,
                actor_id: 23,
                role: 'secondary'
            },{
                character_id: 24,
                actor_id: 24,
                role: 'secondary'
            },{
                character_id: 25,
                actor_id: 25,
                role: 'secondary'
            },{
                character_id: 26,
                actor_id: 26,
                role: 'secondary'
            },{
                character_id: 27,
                actor_id: 27,
                role: 'secondary'
            },{
                character_id: 28,
                actor_id: 28,
                role: 'secondary'
            },{
                character_id: 29,
                actor_id: 29,
                role: 'secondary'
            }
        ],
        directed_by: [2],
        produced_by: [2, 3],
        written_by: [3],
        music_by: [2],
        nominated_in:[
            {
                category_id: 3,
                award_id: 2,
                won: false
            },
            {
                category_id: 4,
                award_id: 2,
                won: false
            },
				{
                category_id: 5,
                award_id: 2,
                won: false
            }
        ]
    },
    {
        _id: 3,
        name:{
            spanish: 'Locuras de Medianoche',
            original: 'Midnight Madness'
        },
        clasification: 'PG-13',
        rating: 6.5,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1980, 2, 8),
        genre: [
            'Comedy'
        ],
        running_time: 112,
        gross: 2900000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 30,
                actor_id: 30,
                role: 'main'
            },{
                character_id: 31,
                actor_id: 31,
                role: 'main'
            },{
                character_id: 32,
                actor_id: 32,
                role: 'main'
            },{
                character_id: 33,
                actor_id: 33,
                role: 'main'
            },{
                character_id: 34,
                actor_id: 34,
                role: 'main'
            },{
                character_id: 35,
                actor_id: 35,
                role: 'main'
            },{
                character_id: 36,
                actor_id: 36,
                role: 'main'
            },{
                character_id: 37,
                actor_id: 37,
                role: 'main'
            },{
                character_id: 38,
                actor_id: 38,
                role: 'main'
            },{
                character_id: 39,
                actor_id: 39,
                role: 'main'
            },{
                character_id: 40,
                actor_id: 40,
                role: 'main'
            },{
                character_id: 41,
                actor_id: 41,
                role: 'main'
            },{
                character_id: 42,
                actor_id: 42,
                role: 'main'
            },{
                character_id: 43,
                actor_id: 43,
                role: 'main'
            },{
                character_id: 44,
                actor_id: 44,
                role: 'main'
            },{
                character_id: 45,
                actor_id: 45,
                role: 'main'
            },{
                character_id: 46,
                actor_id: 46,
                role: 'main'
            },{
                character_id: 47,
                actor_id: 47,
                role: 'main'
            },{
                character_id: 48,
                actor_id: 48,
                role: 'main'
            },
				{
                character_id: 49,
                actor_id: 49,
                role: 'main'
            },{
                character_id: 50,
                actor_id: 50,
                role: 'main'
            },{
                character_id: 51,
                actor_id: 51,
                role: 'main'
            },{
                character_id: 52,
                actor_id: 52,
                role: 'secondary'
            },{
                character_id: 53,
                actor_id: 53,
                role: 'secondary'
            },{
                character_id: 54,
                actor_id: 54,
                role: 'secondary'
            },{
                character_id: 55,
                actor_id: 55,
                role: 'secondary'
            },{
                character_id: 56,
                actor_id: 56,
                role: 'secondary'
            },{
                character_id: 57,
                actor_id: 57,
                role: 'secondary'
            }
        ],
        directed_by: [3,4]
    },
	 {
        _id: 4,
        name:{
            spanish: 'Los Ojos del Bosque',
            original: 'The Watcher in the Woods'
        },
        clasification: 'PG-13',
        rating: 6.4,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1980, 12, 8),
        genre: [
            'Family', 
				'Horror', 
				'Mystery' 
        ],
        running_time: 84,
        gross: 5000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 58,
                actor_id: 58,
                role: 'main'
            },{
                character_id: 59,
                actor_id: 59,
                role: 'main'
            },{
                character_id: 60,
                actor_id: 60,
                role: 'main'
            },{
                character_id: 61,
                actor_id: 61,
                role: 'main'
            },{
                character_id: 62,
                actor_id: 62,
                role: 'main'
            },{
                character_id: 63,
                actor_id: 63,
                role: 'secondary'
            },{
                character_id: 64,
                actor_id: 64,
                role: 'secondary'
            },{
                character_id: 65,
                actor_id: 65,
                role: 'secondary'
            },{
                character_id: 66,
                actor_id: 66,
                role: 'secondary'
            },{
                character_id: 67,
                actor_id: 67,
                role: 'secondary'
            },{
                character_id: 68,
                actor_id: 68,
                role: 'secondary'
            },{
                character_id: 69,
                actor_id: 69,
                role: 'secondary'
            }
        ],
        directed_by: [1,5],
        nominated_in:[
            {
                category_id: 6,
                award_id: 3,
                won: false
            },
            {
                category_id: 7,
                award_id: 3,
                won: false
            },
				{
                category_id: 8,
                award_id: 1,
                won: true
            },
				{
                category_id: 9,
                award_id: 2,
                won: false
            }
        ]
    },
	 {
        _id: 5,
        name:{
            spanish: 'Popeye',
            original: 'Popeye'
        },
        clasification: 'PG-13',
        rating: 5.2,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1980, 12, 12),
        genre: [
            'Adventure', 
				'Comedy', 
				'Family'
        ],
        running_time: 114,
        gross: 49823057,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 70,
                actor_id: 70,
                role: 'main'
            },{
                character_id: 71,
                actor_id: 71,
                role: 'main'
            },{
                character_id: 72,
                actor_id: 72,
                role: 'main'
            },{
                character_id: 73,
                actor_id: 73,
                role: 'antagonist'
            },{
                character_id: 74,
                actor_id: 74,
                role: 'secondary'
            },{
                character_id: 75,
                actor_id: 75,
                role: 'secondary'
            },{
                character_id: 76,
                actor_id: 76,
                role: 'secondary'
            },{
                character_id: 77,
                actor_id: 77,
                role: 'secondary'
            },{
                character_id: 78,
                actor_id: 78,
                role: 'secondary'
            },{
                character_id: 79,
                actor_id: 79,
                role: 'secondary'
            },{
                character_id: 80,
                actor_id: 80,
                role: 'secondary'
            },{
                character_id: 81,
                actor_id: 81,
                role: 'secondary'
            }
        ],
        directed_by: [6],
        nominated_in:[
            {
                category_id: 10,
                award_id: 1,
                won: true
            },
            {
                category_id: 11,
                award_id: 1,
                won: true
            },
				{
                category_id: 12,
                award_id: 1,
                won: true
            },
				{
                category_id: 13,
                award_id: 1,
                won: false
            },
			   {
                category_id: 14,
                award_id: 1,
                won: false
            },
			   {
                category_id: 15,
                award_id: 1,
                won: false
            }
        ]
    },
	 {
        _id: 6,
        name:{
            spanish: 'El Secreto de Amy',
            original: 'Amy'
        },
        clasification: 'PG-13',
        rating: 6.7,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1981, 3, 20),
        genre: [
				'Family',
				'Drama'
        ],
        running_time: 100,
        gross: 0,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 82,
                actor_id: 82,
                role: 'main'
            },{
                character_id: 83,
                actor_id: 83,
                role: 'main'
            },{
                character_id: 84,
                actor_id: 84,
                role: 'main'
            },{
                character_id: 85,
                actor_id: 85,
                role: 'main'
            },{
                character_id: 86,
                actor_id: 86,
                role: 'secondary'
            },{
                character_id: 87,
                actor_id: 87,
                role: 'antagonist'
            },{
                character_id: 88,
                actor_id: 88,
                role: 'secondary'
            },{
                character_id: 89,
                actor_id: 89,
                role: 'secondary'
            },{
                character_id: 90,
                actor_id: 90,
                role: 'secondary'
            },{
                character_id: 91,
                actor_id: 91,
                role: 'secondary'
            },{
                character_id: 92,
                actor_id: 37,
                role: 'secondary'
            },{
                character_id: 93,
                actor_id: 92,
                role: 'secondary'
            },{
                character_id: 94,
                actor_id: 93,
                role: 'secondary'
            },{
                character_id: 95,
                actor_id: 94,
                role: 'secondary'
            }
        ],
        directed_by: [1],
        nominated_in:[
            {
                category_id: 16,
                award_id: 2,
                won: false
            },
            {
                category_id: 17,
                award_id: 2,
                won: false
            }
        ]
    },
	 {
        _id: 7,
        name:{
            spanish: 'Condorman',
            original: 'Condorman'
        },
        clasification: 'PG-13',
        rating: 5.8,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1981, 8, 1),
        genre: [
				 'Action', 
				 'Adventure', 
				 'Comedy' 
        ],
        running_time: 90,
        gross: 0,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 96,
                actor_id: 95,
                role: 'main'
            },{
                character_id: 97,
                actor_id: 96,
                role: 'antagonist'
            },{
                character_id: 98,
                actor_id: 97,
                role: 'main'
            },{
                character_id: 99,
                actor_id: 98,
                role: 'secondary'
            },{
                character_id: 100,
                actor_id: 99,
                role: 'secondary'
            },{
                character_id: 101,
                actor_id: 24,
                role: 'secondary'
            },{
                character_id: 102,
                actor_id: 100,
                role: 'secondary'
            },{
                character_id: 103,
                actor_id: 101,
                role: 'secondary'
            }
        ],
        directed_by: [2]
    },
	 {
        _id: 8,
        name:{
            spanish: 'El Dragon del Lago de Fuego',
            original: 'Dragonslayer'
        },
        clasification: 'PG-13',
        rating: 6.7,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1981, 9, 3),
        genre: [
				 'Action', 
				 'Adventure', 
				 'Fantasy' 
        ],
        running_time: 108,
        gross: 14110013,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 104,
                actor_id: 102,
                role: 'main'
            },{
                character_id: 105,
                actor_id: 103,
                role: 'main'
            },{
                character_id: 106,
                actor_id: 104,
                role: 'main'
            },{
                character_id: 107,
                actor_id: 105,
                role: 'antagonist'
            },{
                character_id: 108,
                actor_id: 106,
                role: 'secondary'
            },{
                character_id: 109,
                actor_id: 107,
                role: 'secondary'
            },{
                character_id: 110,
                actor_id: 108,
                role: 'secondary'
            },{
                character_id: 111,
                actor_id: 109,
                role: 'secondary'
            },{
                character_id: 112,
                actor_id: 110,
                role: 'secondary'
            },{
                character_id: 113,
                actor_id: 111,
                role: 'secondary'
            },{
                character_id: 114,
                actor_id: 112,
                role: 'secondary'
            },{
                character_id: 115,
                actor_id: 113,
                role: 'secondary'
            },{
                character_id: 116,
                actor_id: 114,
                role: 'secondary'
            },{
                character_id: 117,
                actor_id: 115,
                role: 'secondary'
            },{
                character_id: 118,
                actor_id: 116,
                role: 'secondary'
            }
        ],
        directed_by: [7],
		  nominated_in:[
            {
                category_id: 18,
                award_id: 4,
                won: false
            },
            {
                category_id: 19,
                award_id: 4,
                won: false
            },
 				{
                category_id: 20,
                award_id: 3,
                won: false
            },
            {
                category_id: 21,
                award_id: 3,
                won: false
            },
			   {
                category_id: 22,
                award_id: 3,
                won: false
            },
            {
                category_id: 23,
                award_id: 3,
                won: false
            },
            {
                category_id: 24,
                award_id: 5,
                won: false
            }
        ]
    },
	 {
        _id: 9,
        name:{
            spanish: 'Un Pacto de Mil Demonios ',
            original: 'The Devil and Max Devlin'
        },
        clasification: 'PG-13',
        rating: 5.0,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1981, 3, 6),
        genre: [
				 'Comedy', 
				 'Family', 
				 'Fantasy' 
        ],
        running_time: 96,
        gross: 16000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 119,
                actor_id: 16,
                role: 'main'
            },{
                character_id: 120,
                actor_id: 117,
                role: 'antagonist'
            },{
                character_id: 121,
                actor_id: 118,
                role: 'secondary'
            },{
                character_id: 122,
                actor_id: 119,
                role: 'secondary'
            },{
                character_id: 123,
                actor_id: 120,
                role: 'secondary'
            },{
                character_id: 124,
                actor_id: 121,
                role: 'secondary'
            },{
                character_id: 125,
                actor_id: 122,
                role: 'secondary'
            },{
                character_id: 126,
                actor_id: 123,
                role: 'secondary'
            },{
                character_id: 127,
                actor_id: 124,
                role: 'secondary'
            },{
                character_id: 128,
                actor_id: 125,
                role: 'secondary'
            },{
                character_id: 129,
                actor_id: 126,
                role: 'secondary'
            },{
                character_id: 130,
                actor_id: 127,
                role: 'secondary'
            },{
                character_id: 131,
                actor_id: 128,
                role: 'secondary'
            },{
                character_id: 132,
                actor_id: 129,
                role: 'secondary'
            },{
                character_id: 133,
                actor_id: 130,
                role: 'secondary'
            }
        ],
        directed_by: [8] 
    }
	 
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('movie').remove({});
        movies.forEach(async (movie) => {
            await db.collection('movie').save(movie);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save movies data");
        reject(error);
    }
})
