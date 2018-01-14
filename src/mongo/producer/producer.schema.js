/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Producer Schema
 */
var ProducerSchema = new Schema({
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
    produced_in:{
        type:[{
            type: Schema.Types.String,
            required: [true, 'Movie ID is required']
        }]
    }
}, {collection: 'producer'});

module.exports = ProducerSchema;