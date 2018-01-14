/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Category Schema
 */
var CategorySchema = new Schema({

}, {collection: 'category'});

module.exports = CategorySchema;