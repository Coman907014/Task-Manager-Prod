const Task = require('../../models/taskModel');

const updateTaskController = async (req, res) => {
    const taskID = req.params.id;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (isValidOperation) {
        try {
            const task = await Task.findOne({ _id: taskID, userId: req.user._id })
            updates.forEach(update => task[update] = req.body[update])
            await task.save()
              return  task
                ? res.status(201).send(task)
                : res.status(400).send(`There's no task with such ID`)
        } catch (error) {
           return res.status(500).send(error)
        }
    } else {
        return res.status(400).send(`Cannot updated those fields`)
    }
}

module.exports = updateTaskController