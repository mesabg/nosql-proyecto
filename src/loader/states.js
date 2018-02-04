/**
 * Load default data to mongo db
 */

/**
 * Dependencies
 */
const mongoose = require('mongoose');
const db = mongoose.connection;



/**
 * States
 */
const states = [ 
    { _id: 0, name: 'Amazonas', has_studio: null, next_to: [ { state_id: 16, distance: 17 }, { state_id: 0, distance: 30 } ] },
    { _id: 1, name: 'Anzoategui', has_studio: null, next_to: [ { state_id: 6, distance: 34 }, { state_id: 18, distance: 62 } ] },
    { _id: 2, name: 'Apure', has_studio: null, next_to: [ { state_id: 9, distance: 94 }, { state_id: 21, distance: 81 } ] },
    { _id: 3, name: 'Aragua', has_studio: null, next_to: [ { state_id: 23, distance: 42 }, { state_id: 1, distance: 52 } ] },
    { _id: 4, name: 'Barinas', has_studio: null, next_to: [ { state_id: 20, distance: 28 }, { state_id: 22, distance: 28 } ] },
    { _id: 5, name: 'Bolivar', has_studio: null, next_to: [ { state_id: 1, distance: 84 }, { state_id: 0, distance: 75 } ] },
    { _id: 6, name: 'Carabobo', has_studio: null, next_to: [ { state_id: 23, distance: 2 }, { state_id: 2, distance: 99 } ] },
    { _id: 7, name: 'Cojedes', has_studio: null, next_to: [ { state_id: 2, distance: 12 }, { state_id: 5, distance: 90 } ] },
    { _id: 8, name: 'Delta Amacuro', has_studio: null, next_to: [ { state_id: 2, distance: 63 }, { state_id: 20, distance: 42 } ] },
    { _id: 9, name: 'Distrito Capital', has_studio: null, next_to: [ { state_id: 2, distance: 5 }, { state_id: 4, distance: 46 } ] },
    { _id: 10, name: 'Falcon', has_studio: null, next_to: [ { state_id: 15, distance: 78 }, { state_id: 21, distance: 42 } ] },
    { _id: 11, name: 'Guarico', has_studio: 2, next_to: [ { state_id: 9, distance: 38 }, { state_id: 11, distance: 5 } ] },
    { _id: 12, name: 'Lara', has_studio: 0, next_to:[ { state_id: 10, distance: 10 }, { state_id: 10, distance: 7 } ] },
    { _id: 13, name: 'Merida', has_studio: 3, next_to: [ { state_id: 17, distance: 4 }, { state_id: 13, distance: 90 } ] },
    { _id: 14, name: 'Miranda', has_studio: null, next_to: [ { state_id: 9, distance: 53 }, { state_id: 16, distance: 31 } ] },
    { _id: 15, name: 'Monagas', has_studio: 1, next_to: [ { state_id: 5, distance: 24 }, { state_id: 21, distance: 91 } ] },
    { _id: 16, name: 'Nueva Esparta', has_studio: null, next_to: [ { state_id: 22, distance: 21 }, { state_id: 19, distance: 95 } ] },
    { _id: 17, name: 'Portuguesa', has_studio: null, next_to: [ { state_id: 18, distance: 46 }, { state_id: 14, distance: 42 } ] },
    { _id: 18, name: 'Sucre', has_studio: null, next_to: [ { state_id: 5, distance: 69 }, { state_id: 17, distance: 80 } ] },
    { _id: 19, name: 'Tachira', has_studio: null, next_to: [ { state_id: 8, distance: 34 }, { state_id: 7, distance: 37 } ] },
    { _id: 20, name: 'Trujillo', has_studio: null, next_to: [ { state_id: 22, distance: 73 }, { state_id: 11, distance: 81 } ] },
    { _id: 21, name: 'Vargas', has_studio: null, next_to: [ { state_id: 0, distance: 28 }, { state_id: 12, distance: 18 } ] },
    { _id: 22, name: 'Yaracuy', has_studio: null, next_to: [ { state_id: 3, distance: 71 }, { state_id: 3, distance: 46 } ] },
    { _id: 23, name: 'Zulia', has_studio: null, next_to: [ { state_id: 0, distance: 92 }, { state_id: 11, distance: 63 } ] } 
];




/**
 * Saving to mongo
 */
module.exports = new Promise(async (resolve, reject) => {
    try {
        await db.collection('state').remove({});
        states.forEach(async (state) => {
            await db.collection('state').save(state);
        });
        resolve();
    } catch (error) {
        console.log("An error ocurred trying to save states data");
        reject(error);
    }
})
