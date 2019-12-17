const { models } = require("../models");
const { createError, GENERIC_ERROR } = require("../util/error");

/**
 * @description Create new User
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const addUser = async (req, res, next) => {
  try {
    const userDetails = req.body;

    const user = await models.User.create(userDetails);

    return res.status(201).json({
      success: true,
      message: "New user created",
      user
    });
  } catch (err) {
    return next(
      createError({
        message: "Could not create new user",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = addUser;
