const express = require('express')
const router = express.Router()
const tutorial = require('../controller/index')


router.post('/create', async(req, res) => {

    try {
        const data = await tutorial.createTutorial(req.body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})

router.get('/fetchall', async(req, res) => {

    try {
        const data = await tutorial.getAlltutorials()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})



module.exports = router