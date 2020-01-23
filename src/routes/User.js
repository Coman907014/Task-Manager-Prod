const express = require('express');
const userRouter = new express.Router();
const User = require('../models/userModel');
const authMiddleware = require('../middleware/authMiddleware');
// Controllers
const createNewUserController = require('../controllers/usersController/createUser');
const loginUserController = require('../controllers/usersController/loginUser');
const logoutUserController = require('../controllers/usersController/logoutUser');
const logoutAllUserSessionsController = require('../controllers/usersController/logoutUserAllSessions');
const getMyUserInformationController = require('../controllers/usersController/userInformation')
const updateUserInformationController = require('../controllers/usersController/updateUserInformation')
const deleteUserController = require('../controllers/usersController/deleteUser');

userRouter.post('/users', async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    createNewUserController(req, res)
})

userRouter.post('/users/login', async (req, res) => {
    loginUserController(req, res)
})

userRouter.post('/users/logout', authMiddleware, async (req, res) => {
    logoutUserController(req, res)
})

userRouter.post('/users/logout/all', authMiddleware, async (req, res) => {
    logoutAllUserSessionsController(req, res)
})

userRouter.get('/users/me', authMiddleware ,async (req, res) => {
    getMyUserInformationController(req, res)
})

userRouter.patch('/users/me', authMiddleware , async (req, res) => {
    updateUserInformationController(req, res)
})

userRouter.delete('/users/me', authMiddleware, async (req, res) => {
    deleteUserController(req, res)
})

module.exports = userRouter