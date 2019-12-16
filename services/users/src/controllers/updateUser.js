const { models } = require("../models");
const { createError, GENERIC_ERROR, NOT_FOUND } = require("../util/error");

/**
 * @description Update user details
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const newUserDetails = req.body;

    const user = await models.User.findOne({ _id: userId });

    if (!user) {
      return next(
        createError({
          message: "User does not exist",
          status: NOT_FOUND
        })
      );
    }

    const updatedUser = await models.User.findOneAndUpdate(
      { _id: userId },
      newUserDetails
    ).lean();

    return res.status(201).json({
      success: true,
      message: "User details updated successfully",
      user: updatedUser
    });
  } catch (err) {
    return next(
      createError({
        message: "Could not update user details",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = updateUser;
