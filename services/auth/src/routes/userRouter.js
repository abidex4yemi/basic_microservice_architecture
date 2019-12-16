const express = require("express");
const userController = require("../controllers");
const isUserDataValid = require("../middlewares/Validations/isUserDataValid");

const userRouter = express.Router();

userRouter.post("/register", isUserDataValid, userController.createUser);

module.exports = userRouter;
