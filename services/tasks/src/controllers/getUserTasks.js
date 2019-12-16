const { models } = require("../models");
const { createError, GENERIC_ERROR } = require("../util/error");

/**
 * @description Get user task
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */

const getUserTasks = async (req, res, next) => {
  try {
    const { taskId, userId } = req.params;

    const tasks = await models.Task.find({ _id: taskId, userId });

    if (!tasks.length) {
      return res.status(200).json({
        success: true,
        message: "No task to do now",
        totalNumberOfTasks: 0,
        tasks
      });
    }

    return res.status(200).json({
      success: true,
      message: "All user task",
      totalNumberOfTask: tasks.length,
      tasks
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

module.exports = getUserTasks;
