const express = require("express");
const taskController = require("../controllers");
const validateTaskDetails = require("../middlewares/validations/validateTaskDetails");

const taskRouter = express.Router();

taskRouter.route("/tasks").post(validateTaskDetails, taskController.addTask);

taskRouter
  .route("/users/:userId/task/:taskId")
  .patch(validateTaskDetails, taskController.updateTask)
  .delete(taskController.deleteTask)
  .get(taskController.getUserTasks);

module.exports = userRouter;
