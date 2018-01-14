/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Character Schema
 */
var CharacterSchema = new Schema({

}, {collection: 'character'});

module.exports = CharacterSchema;