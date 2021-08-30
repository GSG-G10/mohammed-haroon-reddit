const { profileQuery } = require('../database/Queries')

module.exports = (req, res) => {
    profileQuery(req.params.username).then(result => res.send(result.rows))
};
