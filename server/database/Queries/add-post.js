const connection = require('../connection');

module.exports = (user_id,title,content,imageUrl) => connection.query(
  'INSERT INTO posts (user_id,title,content,imageUrl,vote) VALUES ($1,$2,$3,$4,$5)', [user_id,title,content,imageUrl,0],
);
