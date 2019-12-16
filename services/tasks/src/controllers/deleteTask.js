const { models } = require("../models");
const { createError, GENERIC_ERROR, NOT_FOUND } = require("../util/error");

/**
 * @description Delete user task record
 *
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const deleteTask = async (req, res, next) => {
  try {
    const { taskId, userId } = req.params;

    const taskExist = await models.Task.findOne({ _id: taskId, userId });

    if (!taskExist) {
      return next(
        createError({
          message: "Task does not exist",
          status: NOT_FOUND
        })
      );
    }

    await models.Task.findOneAndDelete({ _id: taskId, userId });

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (err) {
    return next(
      createError({
        message: "Could not delete task",
        status: GENERIC_ERROR
      })
    );
  }
};

module.exports = deleteTask;
