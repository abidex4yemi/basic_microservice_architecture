const Joi = require("@hapi/joi");
const joiValidate = require("../../util/joiValidate");

/**
 * Create user validation schema
 */
const taskSchema = Joi.object().keys({
  description: Joi.string()
    .max(30)
    .label("description")
    .trim()
    .required(),
  state: Joi.string()
    .trim()
    .required(),
  userId: Joi.uuid().required()
});

/**
 * Validate task body against defined schema
 */
const validateTaskDetails = (req, res, next) =>
  joiValidate(req, res, next, taskSchema);

module.exports = validateTaskDetails;
