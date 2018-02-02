/**
 * General functions are loaded here
 */

class General {
    static parseCypher(json){
        return '{' + Object.keys(json).map(key => `${key}: '${json[key]}'`).join() + '}';
    }
};

module.exports = General;