/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Award Schema
 */
var AwardSchema = new Schema({

}, {collection: 'award'});

module.exports = AwardSchema;