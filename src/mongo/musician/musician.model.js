/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const MusicianSchema = require('./musician.schema');

/**
 * Declare model
 */
const MusicianModel = mongoose.model('MusicianModel', MusicianSchema);

module.exports = MusicianModel;