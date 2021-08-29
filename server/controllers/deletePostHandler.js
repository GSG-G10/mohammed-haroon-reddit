const { deletePostQuery, } = require('../database/Queries')

module.exports = (req, res) => {
    deletePostQuery(req.body.id)
    res.redirect('/')
};
