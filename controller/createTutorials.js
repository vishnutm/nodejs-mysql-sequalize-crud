const Joi = require('joi')
const models = require('../models/index')

const createTutorial = async (req) => {

    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string(),
        published: Joi.bool()
    })

    const { error, value } = schema.validate(req)

    if (error) {
        throw error
    }

    const { title, description, published } = value
    let tutorial
    try {
        tutorial = await models.Tutorial.create({
            title: title,
            description: description,
            published: published
        })
        return tutorial
    } catch (error) {
        throw error
    }

}




module.exports = {
    createTutorial
}