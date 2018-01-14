/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const ProducerSchema = require('./producer.schema');

/**
 * Declare model
 */
const ProducerModel = mongoose.model('ProducerModel', ProducerSchema);

module.exports = ProducerModel;