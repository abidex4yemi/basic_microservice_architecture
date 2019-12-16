const express = require("express");
const userController = require("../controllers");
const validateRegisterData = require("../middlewares/Validations/validateRegisterData");
const validateLoginData = require("../middlewares/Validations/validateLoginData");

const userRouter = express.Router();

userRouter.post("/register", validateRegisterData, userController.createUser);
userRouter.post("/login", validateLoginData, userController.login);

module.exports = userRouter;
