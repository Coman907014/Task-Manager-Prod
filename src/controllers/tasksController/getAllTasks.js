
const mapTaskQueryParamsForPopulateMethod = require('../../utils/taskQueryParamsManipulation')

const getAllTasksControllers = async (req, res) => {

    const { mappedQueryParams, mappedSortingParams } = mapTaskQueryParamsForPopulateMethod(req.query);
        try {
            console.log('req.user.tasks', req.user.tasks)
            await req.user.populate({
                path: 'tasks',
                match: mappedQueryParams,
                options: {
                    limit: parseInt(req.query.limit),
                    skip: parseInt(req.query.skip),
                    sort: {
                        ...mappedSortingParams
                    }
                }
            }).execPopulate()
            res.status(201).send(req.user.tasks)
    
        } catch (error) {
            res.status(500).send(error)
        }
}

module.exports = getAllTasksControllers;