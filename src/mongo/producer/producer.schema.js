/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Producer Schema
 */
var ProducerSchema = new Schema({

}, {collection: 'producer'});

module.exports = ProducerSchema;