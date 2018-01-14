/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({
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
    present_in:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Award ID is required']
        }]
    }
}, {collection: 'category'});

module.exports = CategorySchema;