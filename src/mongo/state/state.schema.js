/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * State Schema
 */
var StateSchema = new Schema({
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
    has_studio:{
        type: Schema.Types.Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: null
    },
    next_to:{
        type:[{
            state_id:{
                type: Schema.Types.Number,
                get: v => Math.round(v),
                set: v => Math.round(v),
                required: [true, 'State ID is required']
            },
            distance:{
                type: Schema.Types.Number,
                required: [true, 'Distance is required']
            }
        }]
    },
}, {collection: 'state'});

module.exports = StateSchema;