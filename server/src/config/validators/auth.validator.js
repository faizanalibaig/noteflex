const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

async function ValidateUserRegistration(user) {
  const schema = Joi.object({
    username: Joi.string().min(4).max(256).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'email'] } })
      .required(),
    password: Joi.string()
      .min(8)
      .max(256)
      // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
    // repeat_password: Joi.ref('password'),
    role: Joi.string().valid('Admin', 'User').required(),
  });

  return schema.validate(user);
}

function ValidateUserLogin(user) {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),
    password: Joi.string()
      .min(8)
      .max(256)
      // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required(),
  });

  return schema.validate(user);
}

module.exports = { ValidateUserRegistration, ValidateUserLogin };
