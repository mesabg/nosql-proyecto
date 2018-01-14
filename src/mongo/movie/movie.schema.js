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
        type: Schema.Types.String,
        required: [true, 'ID is required'],
        unique: true
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
    rating:{
        type: Schema.Types.String,
        enum: [
            'G',
            'PG',
            'PG-13',
            'R',
            'NC-17'
        ],
        required: [true, 'Rating is required'],
    },
    studio:{
        type: Schema.Types.String,
        required: [true, 'Studio is required']
    },
    saga:{
        type: Schema.Types.String,
        default: 'N/A'
    },
    previous_movie:{
        type: Schema.Types.String,
        default: null
    },
    release:{
        type: Schema.Types.Date,
        required: [true, 'Release date is required']
    },
    genre:{
        type:[{
            type: Schema.Types.String,
            enum: [
                'Animation',
                'Adventure',
                'Comedy',
                'Family',
                'Fantasy',
                'Music',
                'Mistery'
            ],
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
    personified_by:{
        type:[{
            type:{
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
                }
            },
            required: [true, 'Character is required']
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
    produced_by:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Producer ID is required']
        }]
    },
    written_by:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Writter ID is required']
        }]
    },
    music_by:{
        type:[{
            type: Schema.Types.Number,
            get: v => Math.round(v),
            set: v => Math.round(v),
            required: [true, 'Musician ID is required']
        }]
    },
    nominated_in:{
        type:[{
            type:{
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
            },
            required: [true, 'Character is required']
        }]
    }
}, {collection: 'movie'});

module.exports = MovieSchema;