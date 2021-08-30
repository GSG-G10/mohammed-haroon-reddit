const router = require('express').Router();

const { homePage,signup,deletePost,getPosts,login } = require('../controllers');
const checkIsUser = require('../middlewares/check-if-user')
router.get('/',homePage);
router.post('/signup',signup);
router.post('/login',login);

router.get('/deletePost',checkIsUser,deletePost);
router.get('/getPosts',checkIsUser,getPosts);





module.exports = router;
