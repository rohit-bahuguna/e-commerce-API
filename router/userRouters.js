const express = require('express');
const { singUp, singIn } = require('../controllers/userController');
const userRouter = express.Router();


userRouter.post('/singup' , singUp);
userRouter.post('/singin' , singIn);

module.exports = userRouter;
