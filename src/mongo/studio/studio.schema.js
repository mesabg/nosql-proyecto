/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Studio Schema
 */
var StudioSchema = new Schema({
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
    has_state:{
        type: Schema.Types.Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: [true, 'State ID is required']
    },
    has_movie:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Movie ID is required']
        }]
    }
}, {collection: 'studio'});

module.exports = StudioSchema;