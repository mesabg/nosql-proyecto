const mongoose = require('mongoose');

/**
 * Start DB Connection
 */
const DB = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`;
mongoose.Promise = global.Promise;
let connection = mongoose.connect(DB);
module.exports = connection;