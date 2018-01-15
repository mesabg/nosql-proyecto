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
    },
	 {
        _id: 10,
        name:{
            spanish: 'Tod y Toby/El Zorro y el Sabueso',
            original: 'The Fox and the Hound'
        },
        clasification: 'G',
        rating: 7.3,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: 'The Fox and the Hound',
        release: new Date(1981, 11,27),
        genre: [
				 'Animation', 'Adventure', 'Drama', 'Family'
        ],
        running_time: 83,
        gross: 63456988,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 134,
                actor_id: 131,
                role: 'main'
            },{
                character_id: 135,
                actor_id: 132,
                role: 'main'
            },{
                character_id: 136,
                actor_id: 133,
                role: 'main'
            },{
                character_id: 137,
                actor_id: 134,
                role: 'antagonist'
            },{
                character_id: 138,
                actor_id: 135,
                role: 'secondary'
            },{
                character_id: 139,
                actor_id: 136,
                role: 'secondary'
            },{
                character_id: 140,
                actor_id: 137,
                role: 'secondary'
            },{
                character_id: 141,
                actor_id: 56,
                role: 'secondary'
            },{
                character_id: 142,
                actor_id: 138,
                role: 'secondary'
            },{
                character_id: 143,
                actor_id: 139,
                role: 'secondary'
            },{
                character_id: 144,
                actor_id: 140,
                role: 'secondary'
            },{
                character_id: 145,
                actor_id: 141,
                role: 'main'
            },{
                character_id: 146,
                actor_id: 142,
                role: 'main'
            },{
                character_id: 147,
                actor_id: 143,
                role: 'secondary'
            }
        ],
        directed_by: [9,10,11],
		  nominated_in:[
            {
                category_id: 20,
                award_id: 3,
                won: false
            },
            {
                category_id: 25,
                award_id: 6,
                won: true
            },
 				{
                category_id: 26,
                award_id: 2,
                won: false
            }
        ]
    },
    {
        _id: 11,
        name:{
            spanish: 'Fuga de Noche',
            original: 'Night Crossing'
        },
        clasification: 'PG-13',
        rating: 6.4,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1982, 2, 5),
        genre: [
				 'Drama', 'History', 'Thriller', 'Family'
        ],
        running_time: 105,
        gross: 8000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 148,
                actor_id: 144,
                role: 'main'
            },{
                character_id: 149,
                actor_id: 145,
                role: 'main'
            },{
                character_id: 150,
                actor_id: 146,
                role: 'main'
            },{
                character_id: 151,
                actor_id: 147,
                role: 'main'
            },{
                character_id: 152,
                actor_id: 148,
                role: 'main'
            },{
                character_id: 153,
                actor_id: 149,
                role: 'main'
            },{
                character_id: 154,
                actor_id: 150,
                role: 'main'
            },{
                character_id: 155,
                actor_id: 151,
                role: 'main'
            },{
                character_id: 156,
                actor_id: 152,
                role: 'secondary'
            },{
                character_id: 157,
                actor_id: 153,
                role: 'secondary'
            },{
                character_id: 158,
                actor_id: 154,
                role: 'secondary'
            },{
                character_id: 159,
                actor_id: 155,
                role: 'secondary'
            },{
                character_id: 160,
                actor_id: 156,
                role: 'secondary'
            },{
                character_id: 161,
                actor_id: 157,
                role: 'secondary'
            },{
                character_id: 162,
                actor_id: 158,
                role: 'antagonist'
            }
        ],
        directed_by: [12],
		  nominated_in:[
            {
                category_id: 27,
                award_id: 2,
                won: false
            },
            {
                category_id: 16,
                award_id: 2,
                won: false
            }
        ]
    },
    {
        _id: 12,
        name:{
            spanish: 'Tron',
            original: 'Tron'
        },
        clasification: 'PG-13',
        rating: 6.8,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: 'Tron Series',
        release: new Date(1982, 7, 11),
        genre: [
				 'Action', 'Adventure', 'Sci-Fi'
        ],
        running_time: 96,
        gross: 33000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 163,
                actor_id: 159,
                role: 'main'
            },{
                character_id: 164,
                actor_id: 160,
                role: 'main'
            },{
                character_id: 165,
                actor_id: 161,
                role: 'antagonist'
            },{
                character_id: 166,
                actor_id: 162,
                role: 'main'
            },{
                character_id: 167,
                actor_id: 163,
                role: 'secondary'
            },{
                character_id: 168,
                actor_id: 164,
                role: 'secondary'
            },{
                character_id: 169,
                actor_id: 165,
                role: 'secondary'
            },{
                character_id: 170,
                actor_id: 166,
                role: 'secondary'
            },{
                character_id: 171,
                actor_id: 167,
                role: 'antagonist'
            },{
                character_id: 172,
                actor_id: 168,
                role: 'antagonist'
            },{
                character_id: 173,
                actor_id: 169,
                role: 'secondary'
            },{
                character_id: 174,
                actor_id: 170,
                role: 'secondary'
            },{
                character_id: 175,
                actor_id: 171,
                role: 'secondary'
            },{
                character_id: 176,
                actor_id: 172,
                role: 'secondary'
            },{
                character_id: 177,
                actor_id: 173,
                role: 'secondary'
            }
        ],
        directed_by: [13],
		  nominated_in:[
            {
                category_id: 28,
                award_id: 4,
                won: false
            },
            {
                category_id: 29,
                award_id: 4,
                won: false
            },
 			   {
                category_id: 30,
                award_id: 7,
                won: false
            },
            {
                category_id: 22,
                award_id: 3,
                won: true
            },
				{
                category_id: 31,
                award_id: 3,
                won: false
            },
				{
                category_id: 32,
                award_id: 3,
                won: false
            },
				{
                category_id: 33,
                award_id: 8,
                won: false
            },
			   {
                category_id: 34,
                award_id: 8,
                won: false
            },
				{
                category_id: 35,
                award_id: 9,
                won: true
            },
				{
                category_id: 36,
                award_id: 2,
                won: false
            }
        ]
    },
 	 {
        _id: 13,
        name:{
            spanish: 'Tex',
            original: 'Tex'
        },
        clasification: 'PG-13',
        rating: 6.6,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1982, 7, 30),
        genre: [
				 'Drama'
        ],
        running_time: 103,
        gross: 7400000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 178,
                actor_id: 174,
                role: 'main'
            },{
                character_id: 179,
                actor_id: 175,
                role: 'main'
            },{
                character_id: 180,
                actor_id: 176,
                role: 'secondary'
            },{
                character_id: 181,
                actor_id: 177,
                role: 'secondary'
            },{
                character_id: 182,
                actor_id: 178,
                role: 'secondary'
            },{
                character_id: 183,
                actor_id: 179,
                role: 'secondary'
            },{
                character_id: 184,
                actor_id: 180,
                role: 'secondary'
            },{
                character_id: 185,
                actor_id: 181,
                role: 'secondary'
            },{
                character_id: 186,
                actor_id: 182,
                role: 'secondary'
            },{
                character_id: 187,
                actor_id: 183,
                role: 'secondary'
            },{
                character_id: 188,
                actor_id: 184,
                role: 'secondary'
            },{
                character_id: 189,
                actor_id: 185,
                role: 'secondary'
            },{
                character_id: 190,
                actor_id: 186,
                role: 'secondary'
            },{
                character_id: 191,
                actor_id: 187,
                role: 'secondary'
            },{
                character_id: 192,
                actor_id: 188,
                role: 'secondary'
            }
        ],
        directed_by: [14],
		  nominated_in:[
            {
                category_id: 37,
                award_id: 10,
                won: false
            },
            {
                category_id: 27,
                award_id: 2,
                won: false
            },
 			   {
                category_id: 16,
                award_id: 2,
                won: false
            }
           
        ]
    },
 	 {
        _id: 14,
        name:{
            spanish: 'El Carnaval De Las Tinieblas',
            original: 'Something Wicked This Way Comes'
        },
        clasification: 'PG-13',
        rating: 6.8,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1983, 4, 29),
        genre: [
				 'Fantasy', 'Mistery', 'Thriller'
        ],
        running_time: 95,
        gross: 8400000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 193,
                actor_id: 189,
                role: 'secondary'
            },{
                character_id: 194,
                actor_id: 190,
                role: 'antagonist'
            },{
                character_id: 195,
                actor_id: 191,
                role: 'secondary'
            },{
                character_id: 196,
                actor_id: 192,
                role: 'main'
            },{
                character_id: 197,
                actor_id: 193,
                role: 'main'
            },{
                character_id: 198,
                actor_id: 194,
                role: 'secondary'
            },{
                character_id: 199,
                actor_id: 195,
                role: 'secondary'
            },{
                character_id: 200,
                actor_id: 196,
                role: 'secondary'
            },{
                character_id: 201,
                actor_id: 197,
                role: 'secondary'
            },{
                character_id: 202,
                actor_id: 198,
                role: 'secondary'
            },{
                character_id: 203,
                actor_id: 199,
                role: 'secondary'
            },{
                character_id: 204,
                actor_id: 200,
                role: 'antagonist'
            },{
                character_id: 205,
                actor_id: 201,
                role: 'secondary'
            },{
                character_id: 206,
                actor_id: 202,
                role: 'secondary'
            }
        ],
        directed_by: [15],
		  nominated_in:[
            {
                category_id: 38,
                award_id: 3,
                won: true
            },
            {
                category_id: 20,
                award_id: 3,
                won: true
            },
 			   {
                category_id: 21,
                award_id: 3,
                won: false
            },
				{
                category_id: 19,
                award_id: 3,
                won: false
            },
            {
                category_id: 39,
                award_id: 3,
                won: false
            },
 			   {
                category_id: 8,
                award_id: 3,
                won: false
            },
				{
                category_id: 24,
                award_id: 5,
                won: false
            },
 			   {
                category_id: 40,
                award_id: 11,
                won: false
            }
           
           
        ]
    },
	{
        _id: 15,
        name:{
            spanish: 'Los Lobos No Lloran',
            original: 'Never Cry Wolf'
        },
        clasification: 'PG-13',
        rating: 7.6,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1983, 10, 10),
        genre: [
				 'Drama', 'Adventure'
        ],
        running_time: 105,
        gross: 29600000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 207,
                actor_id: 2,
                role: 'main'
            },{
                character_id: 208,
                actor_id: 203,
                role: 'main'
            },{
                character_id: 209,
                actor_id: 204,
                role: 'main'
            },{
                character_id: 210,
                actor_id: 205,
                role: 'main'
            },{
                character_id: 211,
                actor_id: 206,
                role: 'secondary'
            },{
                character_id: 212,
                actor_id: 207,
                role: 'secondary'
            },{
                character_id: 213,
                actor_id: 208,
                role: 'secondary'
            },{
                character_id: 214,
                actor_id: 209,
                role: 'secondary'
            }
        ],
        directed_by: [16],
		  nominated_in:[
            {
                category_id: 29,
                award_id: 4,
                won: false
            },
            {
                category_id: 41,
                award_id: 12,
                won: true
            },
 			   {
                category_id: 41,
                award_id: 13,
                won: false
            },
				{
                category_id: 42,
                award_id: 14,
                won: true
            },
            {
                category_id: 41,
                award_id: 15,
                won: true
            },
 			   {
                category_id: 43,
                award_id: 16,
                won: false
            },
				{
                category_id: 44,
                award_id: 17,
                won: true
            }
           
        ]
    },
	 {
        _id: 16,
        name:{
            spanish: 'Una Navidad con Mickey',
            original: 'Mickeys Christmas Carol'
        },
        clasification: 'G',
        rating: 8.1,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1983, 12, 16),
        genre: [
				 'Animation', 'Short', 'Comedy'
        ],
        running_time: 26,
        gross:  21000000,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 215,
                actor_id: 210,
                role: 'main'
            },{
                character_id: 216,
                actor_id: 211,
                role: 'main'
            },{
                character_id: 217,
                actor_id: 211,
                role: 'main'
            },{
                character_id: 218,
                actor_id: 211,
                role: 'secondary'
            },{
                character_id: 219,
                actor_id: 212,
                role: 'main'
            },{
                character_id: 220,
                actor_id: 212,
                role: 'secondary'
            },{
                character_id: 221,
                actor_id: 212,
                role: 'secondary'
            },{
                character_id: 222,
                actor_id: 213,
                role: 'secondary'
            },{
                character_id: 223,
                actor_id: 213,
                role: 'secondary'
            },{
                character_id: 224,
                actor_id: 213,
                role: 'antagonist'
            },{
                character_id: 225,
                actor_id: 213,
                role: 'secondary'
            },{
                character_id: 226,
                actor_id: 214,
                role: 'secondary'
            },{
                character_id: 227,
                actor_id: 215,
                role: 'secondary'
            },{
                character_id: 228,
                actor_id: 216,
                role: 'secondary'
            }
        ],
        directed_by: [17],
		  nominated_in:[
            {
                category_id: 45,
                award_id: 4,
                won: false
            }
           
        ]
    },
    {
        _id: 17,
        name:{
            spanish: 'Misterio en Malta / Intriga en Malta',
            original: 'Trenchcoat'
        },
        clasification: 'PG-13',
        rating: 5.2,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1983, 3, 11),
        genre: [
				 'Comedy', 'Mystery', 'Thriller'
        ],
        running_time: 91,
        gross:  4304286,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 229,
                actor_id: 217,
                role: 'main'
            },{
                character_id: 230,
                actor_id: 218,
                role: 'main'
            },{
                character_id: 231,
                actor_id: 219,
                role: 'secondary'
            },{
                character_id: 232,
                actor_id: 220,
                role: 'secondary'
            },{
                character_id: 233,
                actor_id: 221,
                role: 'secondary'
            },{
                character_id: 234,
                actor_id: 222,
                role: 'secondary'
            },{
                character_id: 235,
                actor_id: 223,
                role: 'secondary'
            },{
                character_id: 236,
                actor_id: 224,
                role: 'secondary'
            },{
                character_id: 237,
                actor_id: 225,
                role: 'secondary'
            },{
                character_id: 238,
                actor_id: 226,
                role: 'secondary'
            },{
                character_id: 239,
                actor_id: 227,
                role: 'secondary'
            },{
                character_id: 240,
                actor_id: 228,
                role: 'secondary'
            },{
                character_id: 241,
                actor_id: 229,
                role: 'secondary'
            },{
                character_id: 242,
                actor_id: 230,
                role: 'secondary'
            },{
                character_id: 243,
                actor_id: 231,
                role: 'secondary'
            }
        ],
        directed_by: [18]
    },
	 {
        _id: 18,
        name:{
            spanish: 'A través de la oscuridad',
            original: 'Love Leads the Way: A True Story'
        },
        clasification: 'PG-13',
        rating: 7.7,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1984, 10, 7),
        genre: [
				 'Drama', 'Family', 'History'
        ],
        running_time: 99,
        gross:  0,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 244,
                actor_id: 232,
                role: 'main'
            },{
                character_id: 245,
                actor_id: 233,
                role: 'main'
            },{
                character_id: 246,
                actor_id: 234,
                role: 'main'
            },{
                character_id: 247,
                actor_id: 129,
                role: 'secondary'
            },{
                character_id: 248,
                actor_id: 235,
                role: 'secondary'
            },{
                character_id: 249,
                actor_id: 236,
                role: 'secondary'
            },{
                character_id: 250,
                actor_id: 237,
                role: 'secondary'
            },{
                character_id: 251,
                actor_id: 238,
                role: 'secondary'
            },{
                character_id: 252,
                actor_id: 239,
                role: 'secondary'
            },{
                character_id: 253,
                actor_id: 240,
                role: 'secondary'
            },{
                character_id: 254,
                actor_id: 241,
                role: 'secondary'
            },{
                character_id: 255,
                actor_id: 242,
                role: 'secondary'
            },{
                character_id: 256,
                actor_id: 243,
                role: 'secondary'
            },{
                character_id: 257,
                actor_id: 244,
                role: 'secondary'
            },{
                character_id: 258,
                actor_id: 245,
                role: 'secondary'
            }
        ],
        directed_by: [12]
    },
	 {
        _id: 19,
        name:{
            spanish: 'Where the Toys Come from',
            original: 'Where the Toys Come from'
        },
        clasification: 'G',
        rating: 7.3,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1984, 11, 6),
        genre: [
				  'Animation', 'Adventure', 'Family'
        ],
        running_time: 58,
        gross:  0,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 259,
                actor_id: 246,
                role: 'secondary'
            },{
                character_id: 260,
                actor_id:  247,
                role: 'secondary'
            },{
                character_id: 261,
                actor_id: 248,
                role: 'main'
            },{
                character_id: 262,
                actor_id: 249,
                role: 'main'
            }
        ],
        directed_by: [19],
		  nominated_in:[
            {
                category_id: 46,
                award_id: 18,
                won: true
            }
           
        ]
    },
	 {
        _id: 20,
        name:{
            spanish: 'Navidades Magicas',
            original: 'One Magic Christmas'
        },
        clasification: 'G',
        rating: 6.6,
        studio: 'Walt Disney Productions',
        distributor: 'Buena Vista Distribution',
        saga: '',
        release: new Date(1985, 11, 22),
        genre: [
				  'Fantasy', 'Family'
        ],
        running_time: 89,
        gross:  13677222,
        preceded_by: null, //-- La precede una pelicula fuera del rango de nuestro caso
        personified_by: [
            {
                character_id: 263,
                actor_id: 250,
                role: 'main'
            },{
                character_id: 264,
                actor_id:  251,
                role: 'main'
            },{
                character_id: 265,
                actor_id: 252,
                role: 'main'
            },{
                character_id: 266,
                actor_id: 234,
                role: 'secondary'
            },{
                character_id: 267,
                actor_id: 253,
                role: 'secondary'
            },{
                character_id: 268,
                actor_id:  254,
                role: 'secondary'
            },{
                character_id: 269,
                actor_id: 255,
                role: 'secondary'
            },{
                character_id: 270,
                actor_id: 256,
                role: 'secondary'
            },{
                character_id: 271,
                actor_id: 257,
                role: 'secondary'
            },{
                character_id: 272,
                actor_id:  258,
                role: 'secondary'
            },{
                character_id: 273,
                actor_id: 259,
                role: 'secondary'
            },{
                character_id: 274,
                actor_id: 260,
                role: 'secondary'
            },{
                character_id: 275,
                actor_id: 261,
                role: 'secondary'
            },{
                character_id: 276,
                actor_id:  262,
                role: 'secondary'
            },{
                character_id: 277,
                actor_id: 263,
                role: 'secondary'
            }
        ],
        directed_by: [20],
		  nominated_in:[
            {
                category_id: 47,
                award_id: 19,
                won: true
            },
			   {
                category_id: 48,
                award_id: 19,
                won: true
            },
				{
                category_id: 49,
                award_id: 19,
                won: false
            },
				{
                category_id: 50,
                award_id: 19,
                won: false
            },
				{
                category_id: 51,
                award_id: 19,
                won: false
            },
				{
                category_id: 52,
                award_id: 19,
                won: false
            },
				{
                category_id: 53,
                award_id: 19,
                won: false
            },
				{
                category_id: 54,
                award_id: 2,
                won: false
            },
				{
                category_id: 55,
                award_id: 2,
                won: false
            }
           
        ]
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
