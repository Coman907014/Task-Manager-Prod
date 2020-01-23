const User = require('../../models/userModel');

const loginUserController = async (req, res) => {
    try {
        // Using the user model when we don't work with a specific user
        // E.g. Searching through the DB for a certain user
        const user = await User.findByCredentials(req.body.email, req.body.password)
        // We user the generated user constant when we manipulate a certain user
        // E.g. Found the user by ID and we are updating it.
        // Model vs Instance!
        // The bellow method is being defined in the userSchema as a method
        const token = await user.generateAuthToken()
        return res.send({
            jwt: token,
            user: user
        })
    } catch(error) {
        res.status(400).send(error)
    }
}

module.exports = loginUserController