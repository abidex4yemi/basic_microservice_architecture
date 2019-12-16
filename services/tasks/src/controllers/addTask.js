const { models } = require("../models");
const { createError, GENERIC_ERROR } = require("../util/error");

/**
 * @description Create new task
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const addTask = async (req, res, next) => {
  try {
    const taskDetails = req.body;

    const task = await models.Task.create(taskDetails);

    return res.status(201).json({
      success: true,
      message: "New task created",
      task
    });
  } catch (err) {
    return next(
      createError({
        message: "Could not create new task",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = addTask;
