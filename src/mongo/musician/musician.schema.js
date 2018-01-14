/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Musician Schema
 */
var MusicianSchema = new Schema({

}, {collection: 'musician'});

module.exports = MusicianSchema;