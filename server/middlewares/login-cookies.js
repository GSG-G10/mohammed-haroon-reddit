const { sign } = require('jsonwebtoken');

const loginToken = (req, res) => {
  const secret = process.env.SECRET + req.body.username;
  const cookie = sign({ role: 'user' }, secret);
  res.cookie('logged', cookie, { httpOnly: true, secure: true });
  res.redirect('/');
};

module.exports = loginToken;
