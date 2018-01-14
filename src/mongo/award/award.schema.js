/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Award Schema
 */
var AwardSchema = new Schema({
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
    has_category:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Category ID is required']
        }]
    }
}, {collection: 'award'});

module.exports = AwardSchema;