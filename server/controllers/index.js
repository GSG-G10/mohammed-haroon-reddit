const homePage = require('./home-handler');
const signup = require('./signup-handler');
const deletePost = require('./delete-post-handler');
const getPosts = require('./get-posts');
const login = require('./loginHandler');
const checkuser = require('./checkuser');
const createpost = require('./add-post-handler');
const profiledata = require('./profile-handler');
const profilepage = require('./profile-page');


module.exports = { homePage,signup,deletePost,getPosts,login ,checkuser,createpost,profiledata,profilepage};
