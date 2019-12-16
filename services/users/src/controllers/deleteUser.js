const { models } = require("../models");
const { createError, GENERIC_ERROR, NOT_FOUND } = require("../util/error");

/**
 * @description Delete user record
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const userExist = await models.User.findOne({ _id: userId });

    if (!userExist) {
      return next(
        createError({
          message: "User does not exist",
          status: NOT_FOUND
        })
      );
    }

    await models.User.findOneAndDelete({ _id: userId });

    return res.status(200).json({
      success: true,
      message: "User record deleted successfully"
    });
  } catch (err) {
    return next(
      createError({
        message: "Could not delete user details",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = deleteUser;
