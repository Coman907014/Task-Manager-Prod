const sendTaskCreatedEmail = require('../../emails/emailTasks');
const Task = require('../../models/taskModel')
const createNewTaskController = async (req, res) => {
    const task =  new Task ({
        ...req.body,
        userId: req.user._id
    })
    try {
        const savedTask = await task.save();
        sendTaskCreatedEmail(
            req.user.email,
            req.user.name,
            savedTask.id,
            savedTask.description)
        savedTask
        ? res.status(201).send(savedTask)
        : res.status(400).send('The user was not saved')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = createNewTaskController