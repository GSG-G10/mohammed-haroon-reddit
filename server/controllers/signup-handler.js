const { addUserQuery, } = require('../database/Queries')
const {hashPassword, } = require('../middlewares/hash-password')

module.exports = (req, res) => {
    // server side validation
    hashPassword(req.body.password)
    .then(hashpass => addUserQuery(req.body.name,req.body.email,req.body.username,hashpass))
    .catch(err => console.log(err))
    res.redirect('/')
};
