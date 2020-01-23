const logoutUserController = async (req, res) => { 
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send('User logged out!')
    } catch(error) {
        res.status(500).send(error)
    }
}

module.exports = logoutUserController