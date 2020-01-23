const updateUserInformationController = async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (isValidOperation) {
        try {
            const user = req.user;

            updates.forEach((update) => user[update] = req.body[update])
            await user.save()
            return user
                ? res.status(201).send(user)
                : res.status(400).send(`There's no task with such ID`)
        } catch (error) {
           return res.status(500).send(error)
        }
    } else {
        return res.status(400).send(`Cannot updated those fields`)
    }
}

module.exports = updateUserInformationController