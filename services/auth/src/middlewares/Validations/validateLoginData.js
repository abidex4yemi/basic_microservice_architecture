const Joi = require("@hapi/joi");
const joiValidate = require("../../util/joiValidate");

/**
 * Create user validation schema
 */
const userSchema = Joi.object().keys({
  password: Joi.string()
    .min(6)
    .max(100)
    .label("Password")
    .trim()
    .required(),
  username: Joi.string()
    .trim()
    .required()
});

/**
 * Validate user login data against defined schema
 */
const validateLoginData = (req, res, next) =>
  joiValidate(req, res, next, userSchema);

module.exports = validateLoginData;
