/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Actor Schema
 */
var ActorSchema = new Schema({

}, {collection: 'actor'});

module.exports = ActorSchema;