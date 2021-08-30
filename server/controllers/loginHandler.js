const { getPasswordQuery, } = require('../database/Queries')
const {comparePassword, } = require('../middlewares/hash-password')
const loginToken = require('../middlewares/login-cookies')
module.exports = (req, res) => {
    getPasswordQuery(req.body.username)
    .then((passw)=> {
        comparePassword(req.body.password,passw.rows[0].password)
        .then(result => console.log(result))
        .then(loginToken(req, res)) 
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
};
