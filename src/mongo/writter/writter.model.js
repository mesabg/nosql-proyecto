/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const WritterSchema = require('./writter.schema');

/**
 * Declare model
 */
const WritterModel = mongoose.model('WritterModel', WritterSchema);

module.exports = WritterModel;