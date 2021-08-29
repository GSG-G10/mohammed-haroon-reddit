const getPostsQuery = require('./get-all-post.js');
const addPostQuery = require('./add-post.js');
const deletePostQuery = require('./delete-post.js');
const addUserQuery = require('./add-user.js');
const getSpecificPostQuery = require('./get-specific-post.js');
const getPasswordQuery = require('./get-user.js.js');
module.exports = {
    getPostsQuery,
    addPostQuery,
    deletePostQuery,
    addUserQuery,
    getSpecificPostQuery,
    getPasswordQuery,
}