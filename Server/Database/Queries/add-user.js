const connection = require('../connection');

module.exports = (name,email,username,password) => connection.query(
  'INSERT INTO users (name,email,username,password) VALUES ($1,$2,$3,$4)', [name,email,username,password],
);
