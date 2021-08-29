const { join } = require('path');
const { addUserQuery, } = require('../database/Queries')


module.exports = (req, res) => {
    addUserQuery('11dcscvsv','dsvsv@gmail.com','usscername','dcspassword')
    res.send('good')
  };