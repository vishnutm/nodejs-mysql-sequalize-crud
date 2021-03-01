const models = require('../models/index')


const singleTutorial = async (req) => {
    
   const id = req.id || ''
    try {

        const data = await models.Tutorial.findByPk(id)

        return data
    }
    catch (error) {
        throw error
    }

}



module.exports = {
    singleTutorial
}