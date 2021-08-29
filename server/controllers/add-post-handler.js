const { addPostQuery, } = require('../database/Queries')


module.exports = (req, res) => {
    addPostQuery(req.body)
    res.redirect('/')
  };