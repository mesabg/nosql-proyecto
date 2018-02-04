/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const StateSchema = require('./state.schema');

/**
 * Declare model
 */
const StateModel = mongoose.model('StateModel', StateSchema);

module.exports = StateModel;