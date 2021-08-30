const { getPasswordQuery, } = require('../database/Queries')
const {comparePassword, } = require('../middlewares/hash-password')
const loginToken = require('../middlewares/login-cookies')
module.exports = (req, res) => {
    const hashpass = getPasswordQuery(req.body.username)
    comparePassword(req.body.password,hashpass)
    .then(result => loginToken(req, res))
    .catch(err => console.log(err))
    res.redirect('/')
};
