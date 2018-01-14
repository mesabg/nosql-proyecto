/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const ActorSchema = require('./actor.schema');

/**
 * Declare model
 */
const ActorModel = mongoose.model('ActorModel', ActorSchema);

module.exports = ActorModel;