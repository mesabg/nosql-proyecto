/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const StudioSchema = require('./studio.schema');

/**
 * Declare model
 */
const StudioModel = mongoose.model('StudioModel', StudioSchema);

module.exports = StudioModel;