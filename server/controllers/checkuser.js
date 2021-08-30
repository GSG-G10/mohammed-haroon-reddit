const { verify } = require('jsonwebtoken');

const checkIsUser = (req, res) => {
  if (!req.cookies) return res.json({status:false});
  const { logged } = req.cookies;
  const secret = process.env.SECRET + req.body.username;
  if (!logged) return res.json({status:false});
  verify(logged, secret, (err, logged) => {
    res.json({status:true})
  });
  

};

module.exports = checkIsUser;