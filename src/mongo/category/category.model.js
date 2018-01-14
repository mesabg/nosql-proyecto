/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const CategorySchema = require('./category.schema');

/**
 * Declare model
 */
const CategoryModel = mongoose.model('CategoryModel', CategorySchema);

module.exports = CategoryModel;