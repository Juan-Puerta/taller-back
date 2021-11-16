const joi = require("joi");

const schemaNotes = {
  note: joi.object().keys({
    title: joi.string().min(3).required(),
    comment: joi.string().min(3).required(),
  }),
};

module.exports = schemaNotes;
