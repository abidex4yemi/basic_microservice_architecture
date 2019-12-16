const { models } = require("../models");
const { createError, GENERIC_ERROR, NOT_FOUND } = require("../util/error");

/**
 * Get single user
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await models.User.findOne({ _id: id });

    if (!user) {
      return res.status(NOT_FOUND).json({
        success: false,
        message: `Cannot find user with ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      message: "User record found",
      user
    });
  } catch (err) {
    return next(
      createError({
        message: "User record not found",
        status: NOT_FOUND
      })
    );
  }
};

module.exports = getUserById;
