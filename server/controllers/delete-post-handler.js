const { deletePostQuery, } = require('../database/Queries')

module.exports = (req, res) => {
    deletePostQuery(req.query.id)
    .then(res.redirect('/'))
    .catch(err => console.log(err))
};
