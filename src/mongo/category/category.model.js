/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const AwardSchema = require('./award.schema');

/**
 * Declare model
 */
const AwardModel = mongoose.model('AwardModel', AwardSchema);

module.exports = AwardModel;