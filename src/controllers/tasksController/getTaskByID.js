const Task = require('../../models/taskModel');

const getTaskByIDController = async (req, res) => {
    const taskID = req.params.id
    try {
        const requestedTask = await Task.findOne({ _id: taskID, userId: req.user._id })
        requestedTask
        ? res.status(201).send(requestedTask)
        : res.status(400).send(`There's no task with such ID`)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = getTaskByIDController