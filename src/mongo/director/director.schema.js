/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Director Schema
 */
var DirectorSchema = new Schema({
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
    directed_in:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Movie ID is required']
        }]
    }
}, {collection: 'director'});

module.exports = DirectorSchema;