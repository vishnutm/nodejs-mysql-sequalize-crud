const express = require('express')
const router = express.Router()
const tutorial = require('../controller/index')

// router for creating new tutorial
router.post('/create', async(req, res) => {

    try {
        const data = await tutorial.createTutorial(req.body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})
// router for fetching all data 
router.get('/fetchall', async(req, res) => {

    try {
        const data = await tutorial.getAlltutorials()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})
// router for get a single tutroial details
router.post('/getTutorial', async(req, res) => {

    try {
        const data = await tutorial.singleTutorial(req.body)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})
// update tutorial based on the id
router.put('/update', async(req, res) => {

    try {
        const data = await tutorial.updateTutorial(req.body)
        console.log(req.body);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }

})


module.exports = router