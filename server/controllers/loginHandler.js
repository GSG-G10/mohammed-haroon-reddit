const { getPasswordQuery, } = require('../database/Queries')
const {comparePassword, } = require('../middlewares/hash-password')
const loginToken = require('../middlewares/login-cookies')
module.exports = (req, res) => {
    getPasswordQuery(req.body.username)
    .then((passw)=> {
        comparePassword(req.body.password,passw.rows[0].password)
        .then(result => {
            if (result ===true){
                loginToken(req, res)
            }else{
                res.redirect('/login.html')
            }
        })
        .catch(error => {
            res.redirect('/login.html')
        })
    })
    .catch(error => {
        res.redirect('/login.html')
    })
};
