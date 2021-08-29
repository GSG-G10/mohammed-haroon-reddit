const connection = require('../connection');

module.exports = (id) => connection.query(`SELECT * FROM posts WHERE user_id='${id}'`);
