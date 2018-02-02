/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Movie Schema
 */
var MovieSchema = new Schema({
    _id:{
        type: Schema.Types.Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        required: [true, 'ID is required']
    },
    name:{
        type:{
            spanish:{
                type: Schema.Types.String,
                index: true,
                required: [true, 'Spanish name is required']
            },
            original:{
                type: Schema.Types.String,
                index: true,
                required: [true, 'Original name is required']
            }
        },
        index: true,
        required: true
    },
    clasification:{
        type: Schema.Types.String,
        enum: [
            'G',
            'PG',
            'PG-13',
            'R',
            'NC-17'
        ],
        required: [true, 'Clasification is required'],
    },
    rating:{
        type: Schema.Types.Number,
        required: [true, 'Rating stars are required']
    },
    studio:{
        type: Schema.Types.String,
        index: true,
        required: [true, 'Studio is required']
    },
    distributor:{
        type: Schema.Types.String,
        index: true,
        required: [true, 'Distributor is required']
    },
    saga:{
        type: Schema.Types.String,
        index: true,
        default: 'N/A'
    },
    release:{
        type: Schema.Types.Date,
        required: [true, 'Release date is required']
    },
    genre:{
        type:[{
            type: Schema.Types.String,
            required: [true, 'Genre is required']
        }],
        index: true
    },
    running_time:{
        type: Schema.Types.Number,
        required: [true, 'Running time is required']
    },
    gross:{
        type: Schema.Types.Number,
        required: [true, 'Gross is required']
    },
    preceded_by:{
        type: Schema.Types.Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        default: null
    },
    acted_by:{
        type:[{
            character_id:{
                type: Schema.Types.Number,
                get: v => Math.round(v),
                set: v => Math.round(v),
                required: [true, 'Character ID is required']
            },
            actor_id:{
                type: Schema.Types.Number,
                get: v => Math.round(v),
                set: v => Math.round(v),
                required: [true, 'Actor ID is required']
            },
            role:{
                type: Schema.Types.String,
                required: [true, 'Role is required']
            }
        }]
    },
    directed_by:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Director ID is required']
        }]
    },
    nominated_in:{
        type:[{
            category_id:{
                type: Schema.Types.Number,
                get: v => Math.round(v),
                set: v => Math.round(v),
                required: [true, 'Character ID is required']
            },
            award_id:{
                type: Schema.Types.Number,
                get: v => Math.round(v),
                set: v => Math.round(v),
                required: [true, 'Actor ID is required']
            },
            won:{
                type: Schema.Types.Boolean,
                required: [true, 'Won is required'],
                default: false
            }
        }]
    }
}, {collection: 'movie'});

module.exports = MovieSchema;