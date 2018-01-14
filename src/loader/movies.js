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
        saga: 'Herbie',
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
                role: 'main'
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
                role: 'secondary'
            },{
                character_id: 7,
                actor_id: 7,
                role: 'secondary'
            },{
                character_id: 8,
                actor_id: 8,
                role: 'secondary'
            },{
                character_id: 9,
                actor_id: 9,
                role: 'secondary'
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
