const { addUserQuery, } = require('../database/Queries')


module.exports = (req, res) => {
    addUserQuery(req.body)
    res.redirect('/')
};