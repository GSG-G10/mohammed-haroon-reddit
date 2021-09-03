const router = require('express').Router();
const { join } = require('path');


const {homePage,signup,deletePost,getPosts,login,checkuser,createpost,profiledata,profilepage,} = require('../controllers');
const checkIsUser = require('../middlewares/check-if-user');
router.get('/', homePage);
router.post('/signup', signup);
router.post('/login', login);
router.get('/checkuser', checkuser);

router.get('/deletePost', checkIsUser, deletePost);
router.get('/getPosts', checkIsUser, getPosts);
router.get('/createpost', checkIsUser, createpost);
router.get('/profiledata/:username', profiledata);
router.get('/profilepage/:username', profilepage);
router.post('/logout', (req, res) => {
  res.clearCookie('logged').redirect('/');
});
router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
});
router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});
router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'profile.html'));
});

module.exports = router;