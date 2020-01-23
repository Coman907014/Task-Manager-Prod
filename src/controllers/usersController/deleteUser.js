const deleteUserController = async (req, res) => {
    try {
        await req.user.remove()
        res.send('The user was deleted successfully!')
    } catch(error) {
        res.status(500).send(error)
    }
}

module.exports = deleteUserController