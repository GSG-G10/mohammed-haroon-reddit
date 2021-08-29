const { getPostsQuery, } = require('../database/Queries')

module.exports = (req, res) => {
    getPostsQuery().then(result => res.send(result.rows))
};
