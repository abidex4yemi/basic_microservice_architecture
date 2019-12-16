const express = require("express");
const authController = require("../controllers");
const validateRegisterData = require("../middlewares/Validations/validateRegisterData");
const validateLoginData = require("../middlewares/Validations/validateLoginData");

const userRouter = express.Router();

userRouter.post("/register", validateRegisterData, authController.createUser);
userRouter.post("/login", validateLoginData, authController.login);

module.exports = userRouter;
