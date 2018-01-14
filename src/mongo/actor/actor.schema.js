/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Actor Schema
 */
var ActorSchema = new Schema({
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
    acted_in:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Movie ID is required']
        }]
    },
    personifies:{
        type:[{
            type: Schema.Types.String,
            required: [true, 'Character ID is required']
        }]
    }
}, {collection: 'actor'});

module.exports = ActorSchema;