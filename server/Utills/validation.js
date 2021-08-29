const Joi = require('joi');

const loginSchema = Joi.object({
  username: Joi.string().email().min(3).max(30)
    .required(),
  password: Joi.string().min(7).max(30).required(),
});

const singupSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  username: Joi.alphanum().min(3).max(30).required(),
  email: Joi.string().email().min(7).max(30).required(),
  password: Joi.string().min(7).max(30).required(),
  confirmPassword: Joi.string().min(7).max(30).required(),
});

const postSchema = Joi.object({
    title: Joi.string().min(20).max(50).required(),
    content: Joi.string().min(20).max(2000).required(),
    imageUrl : Joi.URL().required(),
});

module.exports = { loginSchema, singupSchema , postSchema };
