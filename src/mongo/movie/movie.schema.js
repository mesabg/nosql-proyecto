/**
 * Global dependencies
 */
const Schema = require('mongoose').Schema;

/**
 * Movie Schema
 */
var MovieSchema = new Schema({
    language: {
        type: String,
        required: true,
        unique: true
    },
    data:[{
        theme:String,
        week:Number,
        day:Number,
        area:String,
        topic:String,
        message:Number,
        time:String,
        content:String,
        media:String
    }]
}, {collection: 'movie'});

module.exports = MovieSchema;