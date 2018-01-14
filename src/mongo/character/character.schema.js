/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Character Schema
 */
var CharacterSchema = new Schema({
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
    appear_in:{
        type:[{
            type: Schema.Types.String,
            required: [true, 'Movie ID is required']
        }]
    }
}, {collection: 'character'});

module.exports = CharacterSchema;