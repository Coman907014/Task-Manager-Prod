const Task = require('../../models/taskModel');


const deleteTaskController = async (req, res) => {
    const taskID = req.params.id;
    try {
        await Task.findOneAndDelete({ _id: taskID, userId: req.user._id})
    } catch (error) {
      return res.status(500).send(error)
    }
    try {
        const updatedTaskList = await Task.find({ userId: req.user._id })
      return updatedTaskList
        ? res.status(201).send({ updatedTaskList })
        : res.status(400).send(`There's no task with such ID`)
    } catch (error) {
       return res.status(500).send(error)
    }
}

module.exports = deleteTaskController