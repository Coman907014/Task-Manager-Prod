const User = require('../../models/userModel');
const sendWelcomeEmail = require('../../emails/emailAccount');

const createNewUserController = async (req, res) => {

    const user = await new User(req.body);
    const token = await user.generateAuthToken()

    try {
        const savedUser = await user.save()
        sendWelcomeEmail(user.email, user.name);
        savedUser
        ? res.status(201).send({
            jwt: token,
            user: user
        })
        : res.status(400).send('The user was not saved')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = createNewUserController