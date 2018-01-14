/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Writter Schema
 */
var WritterSchema = new Schema({

}, {collection: 'writter'});

module.exports = WritterSchema;