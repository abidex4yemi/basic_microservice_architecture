const express = require("express");
const userController = require("../controllers");

const userRouter = express.Router();

userRouter
  .route("/")
  .post(userController.addUser)
  .get(userController.getAllUser);

userRouter
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser)
  .get(userController.getUserById);

module.exports = userRouter;
