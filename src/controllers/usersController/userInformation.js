const getMyUserInformationController = async (req, res) => {
    res.status(200).send(req.user)
}

module.exports = getMyUserInformationController