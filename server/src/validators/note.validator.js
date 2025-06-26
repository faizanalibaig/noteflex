const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function ValidateNote(note) {
  const schema = Joi.object({
    title: Joi.string().min(6).max(512).required(),
    descripiton: Joi.string().min(10).max(5024).required(),
    user: Joi.objectId().required(),
    tags: Joi.array().items(Joi.string()).max(5),
  });

  return schema.validate(note);
}

module.exports = { ValidateNote };
