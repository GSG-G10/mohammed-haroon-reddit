const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

module.exports = {
  comparePassword,
  hashPassword
};
