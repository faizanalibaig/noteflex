const Joi = require('joi');

function ValidateNote(note) {
  const schema = Joi.object({
    title: Joi.string().min(6).max(512).required(),
  });

  return schema.validate(note);
}

module.exports = { ValidateNote };
