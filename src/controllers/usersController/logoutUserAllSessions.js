const logoutAllUserSessionsController = async (req, res) => {
    try {
        req.user.tokens = []
        
        await req.user.save()
        res.send(req.user)
    } catch(error) {
        res.status(500).send(error)
    }
}

module.exports = logoutAllUserSessionsController