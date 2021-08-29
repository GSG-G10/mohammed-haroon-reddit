const { getPostsQuery, } = require('../database/Queries')

module.exports = (req, res) => {
    getSpecificPostQuery(req.body.username).then(result => res.send(result.rows))
};
