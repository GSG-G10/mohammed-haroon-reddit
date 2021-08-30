const connection = require('../connection');

module.exports = (username) => connection.query(`SELECT * FROM users WHERE username='${username}'`);
