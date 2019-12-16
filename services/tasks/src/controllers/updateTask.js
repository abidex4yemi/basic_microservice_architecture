const { models } = require("../models");
const { createError, GENERIC_ERROR, NOT_FOUND } = require("../util/error");

/**
 * @description Update task details
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const updateTask = async (req, res, next) => {
  try {
    const { taskId, userId } = req.params;

    const newTaskDetails = req.body;

    const task = await models.Task.findOne({ _id: taskId, userId });

    if (!task) {
      return next(
        createError({
          message: "Task does not exist",
          status: NOT_FOUND
        })
      );
    }

    const updatedTask = await models.User.findOneAndUpdate(
      { _id: taskId },
      newTaskDetails
    ).lean();

    return res.status(201).json({
      success: true,
      message: "Task details updated successfully",
      user: updatedTask
    });
  } catch (err) {
    return next(
      createError({
        message: "Could not update task details",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = updateTask;
