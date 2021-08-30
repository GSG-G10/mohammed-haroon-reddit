const router = require('express').Router();

const { homePage,signup,deletePost,getPosts } = require('../controllers');

router.get('/',homePage);
router.post('/signup',signup);
router.get('/deletePost',deletePost);
router.get('/getPosts',getPosts);





module.exports = router;
