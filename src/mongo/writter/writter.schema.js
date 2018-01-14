/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Writter Schema
 */
var WritterSchema = new Schema({
    _id:{
        type: Schema.Types.Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: [true, 'ID is required'],
        unique: true
    },
    name:{
        type: Schema.Types.String,
        required: [true, 'Name is required']
    },
    wrote_in:{
        type:[{
            type: Schema.Types.String,
            required: [true, 'Movie ID is required']
        }]
    }
}, {collection: 'writter'});

module.exports = WritterSchema;