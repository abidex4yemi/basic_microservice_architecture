const bcrypt = require("bcryptjs");
const { models } = require("../models");
const { createError, CONFLICT, GENERIC_ERROR } = require("../util/error");

/**
 * @description Create new user
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const createUser = async (req, res, next) => {
  try {
    const userDetails = req.body;

    const salt = bcrypt.genSaltSync(10);

    userDetails.password = bcrypt.hashSync(userDetails.password, salt);
    userDetails.username = userDetails.username.toLowerCase();

    const newUser = await models.User.create(userDetails);
    // convert Mongoose model to plain JS object to remove pw
    const user = newUser.toObject({ versionKey: false });

    delete user.__v;
    delete user.password;

    return res.status(201).json({
      success: true,
      message: "New user created",
      user
    });
  } catch (err) {
    if (err.message.includes("duplicate key")) {
      return next(
        createError({
          message: "username already exists",
          status: CONFLICT
        })
      );
    }
    return next(
      createError({
        message: "Could not create new user",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = createUser;
