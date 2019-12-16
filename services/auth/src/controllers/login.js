const bcrypt = require("bcryptjs");
const { models } = require("../models");
const generateToken = require("../util/generateToken");

const { createError, NOT_FOUND, GENERIC_ERROR } = require("../util/error");

/**
 * @description Login user
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const login = async (req, res, next) => {
  try {
    let { username } = req.body;
    const { password } = req.body;

    username = username.toLowerCase();

    const user = await models.User.findOne({ username }).lean();

    if (!user) {
      return next(
        createError({
          message: "Invalid username/password",
          status: NOT_FOUND
        })
      );
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return next(
        createError({
          message: "User does not exist",
          status: NOT_FOUND
        })
      );
    }

    delete user.__v;
    delete user.password;
    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Login succeeded",
      user,
      token
    });
  } catch (err) {
    return next(
      createError({
        message: "Something went wrong try again",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = login;
