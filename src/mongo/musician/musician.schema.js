/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Musician Schema
 */
var MusicianSchema = new Schema({
    _id:{
        type: Schema.Types.Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: [true, 'ID is required']
    },
    name:{
        type: Schema.Types.String,
        index: true,
        required: [true, 'Name is required']
    },
    wrote_music_of:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Movie ID is required']
        }]
    }
}, {collection: 'musician'});

module.exports = MusicianSchema;