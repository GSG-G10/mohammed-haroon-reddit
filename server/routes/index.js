const router = require('express').Router();

const { homePage,signup,deletePost,getPosts,login,checkuser ,createpost,profiledata,profilepage} = require('../controllers');
const checkIsUser = require('../middlewares/check-if-user')
router.get('/',homePage);
router.post('/signup',signup);
router.post('/login',login);
router.get('/checkuser',checkuser);

router.get('/deletePost',checkIsUser,deletePost);
router.get('/getPosts',checkIsUser,getPosts);
router.get('/createpost',checkIsUser,createpost);
router.get('/profiledata/:username',profiledata);
router.get('/profilepage/:username',profilepage);
profilepage

module.exports = router;
