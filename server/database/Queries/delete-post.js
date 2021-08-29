const connection = require('../connection');

module.exports = (id) => connection.query(`DELETE FROM posts WHERE id = '${id}'`);
