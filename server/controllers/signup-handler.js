const { addUserQuery, } = require('../database/Queries')
const {hashPassword, } = require('../middlewares/hash-password')
const loginToken= require('../middlewares/login-cookies')

module.exports = (req, res) => {
    // server side validation
    hashPassword(req.body.password)
    .then(hashpass => addUserQuery(req.body.name,req.body.email,req.body.username,hashpass))
    .catch(err => console.log(err))
    loginToken(req, res)
};
