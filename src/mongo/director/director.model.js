/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const DirectorSchema = require('./director.schema');

/**
 * Declare model
 */
const DirectorModel = mongoose.model('DirectorModel', DirectorSchema);

module.exports = DirectorModel;