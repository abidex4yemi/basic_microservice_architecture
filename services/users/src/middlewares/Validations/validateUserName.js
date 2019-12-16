const Joi = require("@hapi/joi");
const joiValidate = require("../../util/joiValidate");

/**
 * Create user validation schema
 */
const userSchema = Joi.object().keys({
  name: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .error(() => "name is required and must be alphabet")
    .max(30)
    .trim()
    .required()
});

/**
 * Validate user body against defined schema
 */
const validateUserName = (req, res, next) =>
  joiValidate(req, res, next, userSchema);

module.exports = validateUserName;
