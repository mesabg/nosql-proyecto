/**
 * Global dependencies
 */
const mongoose = require('mongoose');

/**
 * Local dependencies
 */
const CharacterSchema = require('./character.schema');

/**
 * Declare model
 */
const CharacterModel = mongoose.model('CharacterModel', CharacterSchema);

module.exports = CharacterModel;