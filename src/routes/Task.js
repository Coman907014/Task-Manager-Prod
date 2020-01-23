const express = require('express');
const taskRouter = new express.Router();
const authMiddleware = require('../middleware/authMiddleware')

// Controllers
const createNewTaskController = require('../controllers/tasksController/createTask')
const getAllTasksController = require('../controllers/tasksController/getAllTasks')
const getTaskByIDController = require('../controllers/tasksController/getTaskByID');
const updateTaskController = require('../controllers/tasksController/updateTask')
const deleteTaskController = require('../controllers/tasksController/deleteTask');

taskRouter.post('/tasks', authMiddleware, async (req, res) => {
    createNewTaskController(req, res)
})

taskRouter.get('/tasks', authMiddleware, async (req, res) => {
    getAllTasksController(req, res)
})

taskRouter.get('/tasks/:id', authMiddleware , async (req, res) => {
    getTaskByIDController(req, res)
})

taskRouter.patch('/tasks/:id', authMiddleware, async (req, res) => {
    updateTaskController(req, res)
})

taskRouter.delete('/tasks/:id', authMiddleware , async (req, res) => {
    deleteTaskController(req, res)
})

module.exports = taskRouter