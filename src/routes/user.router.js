const { getAll, create, getOne, remove, update, verifyCode, login, getLoggedUser } = require('../controllers/user.controller.js');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT.js')

const userRouter = express.Router();

userRouter.route('/users')
    .get(verifyJWT, getAll)
    .post(create);

userRouter.route('/users/login')
    .post(login);

userRouter.route('/users/me')
    .get(verifyJWT, getLoggedUser);

userRouter.route('/users/verify/:code')
    .get(verifyCode);

userRouter.route('/users/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = userRouter;