const { models } = require("../models");
const { createError, GENERIC_ERROR } = require("../util/error");

/**
 * @description Get users
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const getAllUser = async (req, res, next) => {
  try {
    const users = await models.User.find();

    if (!users.length) {
      return res.status(200).json({
        success: true,
        message: "Could not find any user",
        totalNumberOfUsers: 0,
        users: []
      });
    }

    return res.status(200).json({
      success: true,
      message: "All users",
      totalNumberOfUsers: users.length,
      users
    });
  } catch (err) {
    return next(
      createError({
        message: "Something went wrong",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = {
  getAllUser
};
