
const models = require('../models/index')
const {Op} = require('sequelize')

const getAlltutorials = async (req) => {

    

    
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