
const models = require('../models/index')


const getAlltutorials = async () => {

    try {

        const getAlldata = await models.Tutorial.findAll()

        return getAlldata
    }
    catch (error) {
        throw error
    }

}



module.exports = {
    getAlltutorials
}