const connection = require('../connection');

module.exports = (username) => connection.query(`SELECT id FROM users WHERE username='${username}'`);
