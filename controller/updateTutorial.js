const models = require('../models/index')
const Joi = require('joi')

const updateTutorial = async (req) => {
    const schema = Joi.object({
        id: Joi.number().integer(),
        title: Joi.string().required(),
        description: Joi.string(),
        published: Joi.boolean()
    })

    const { error, value } = schema.validate(req)
    if (error) {
        throw error
    }
    
    const { id, title, description, published } = value
    try {

        const data = await models.Tutorial.update({
            title: title,
            description: description,
            published: published

        }, { where:{id:id}  })

        return data
    }
    catch (error) {
        throw error
    }

}



module.exports = {
    updateTutorial
}