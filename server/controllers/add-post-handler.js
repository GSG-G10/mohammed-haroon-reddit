const { addPostQuery,getIdQuery } = require('../database/Queries')


module.exports = (req, res) => {
  getIdQuery(req.cookies.username).then(result => addPostQuery(result.rows[0].id,req.query.title,req.query.content,req.query.imageurl))
  res.redirect('/')
};
