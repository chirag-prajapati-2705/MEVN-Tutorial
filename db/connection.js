const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/mevnStack';
const db = monk(connectionString);

module.exports = db;
