/**
 * General functions are loaded here
 */

class General {
    static arrayToString(array) {
        return '[' + array.map(value => {
            return `'${value}'`
        }).join() + ']';
    }
    
    static parseCypher(json){
        return '{' + Object.keys(json).map(key => {
            if (json[key] instanceof Array) return `${key}: ${General.arrayToString(json[key])}`;
            else if (typeof json[key] == 'number') return `${key}: ${json[key]}`;
            return `${key}: '${json[key]}'`;
        }).join() + '}';
    }

    static config(){
        /**
         * General Functions
         * @param {Integer} min 
         * @param {Integer} max 
         */
        Number.getRandomInt = function getRandomInt(min = 0, max = 0) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }

    static randomDataGenerator(){
        const util = require('util');
        /**
         * States array
         */
        let states = [
            'Amazonas', 
            'Anzoategui', 
            'Apure', 
            'Aragua', 
            'Barinas', 
            'Bolivar',
            'Carabobo',
            'Cojedes', 
            'Delta Amacuro', 
            'Distrito Capital', 
            'Falcon', 
            'Guarico', 
            'Lara',
            'Merida', 
            'Miranda', 
            'Monagas', 
            'Nueva Esparta', 
            'Portuguesa', 
            'Sucre', 
            'Tachira',
            'Trujillo', 
            'Vargas', 
            'Yaracuy', 
            'Zulia'
        ].map((state, index, array) => {
            return {
                _id: index,
                name: state,
                has_studio: 0,
                next_to: (new Array(Number.getRandomInt(1, 6), 0)).map(value => {
                    return {
                        state_id: Number.getRandomInt(0, 23),
                        distance: Number.getRandomInt(1, 100),
                    }
                })
            };
        });


        /**
         * Studios array
         */
        let studios = [
            'Walt Disney Productions',
            'Walt Disney Pictures',
            'Kushner-Locke Company',
            'Walt Disney Feature Animation',
        ].map((studio, index) => {
            return {
                _id: index,
                name: studio,
                has_state: Number.getRandomInt(0, 23),
                has_movie: (new Array(Number.getRandomInt(2, 4), 0)).map(value => Number.getRandomInt(1, 32))
            }
        });


        console.log(util.inspect(states, {showHidden: false, depth: null}));
        console.log();
        console.log(util.inspect(studios, {showHidden: false, depth: null}));
    }
};

module.exports = General;