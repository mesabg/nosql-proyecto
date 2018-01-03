/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const MovieSchema = require('./movie.schema');

/**
 * Declare model
 */
const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = MovieModel;