const express = require("express");
const userController = require("../controllers");
const validateUserName = require("../middlewares/Validations/validateUserName");

const userRouter = express.Router();

userRouter
  .route("/")
  .post(validateUserName, userController.addUser)
  .get(userController.getAllUser);

userRouter
  .route("/:id")
  .patch(validateUserName, userController.updateUser)
  .delete(userController.deleteUser)
  .get(userController.getUserById);

module.exports = userRouter;
