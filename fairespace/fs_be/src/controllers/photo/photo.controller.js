const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const app = express();
// const { isAuthenticated } = require('../middleware/auth');
// let photos = require('../../old_models/questions.model');
const {Photo, Quizzes} = require("../../models/Photo");
app.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', async (req, res) => {
    const photos = await Photo.findAll()
    res.json(photos);
})

router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const photo = await Photo.findByPk(id)
        if (!quiz) {
            throw new Error('PHOTO NOT FOUND');
        }
        // res.render('quiz/quiz',{quiz});
        res.json(photo);
        return;
    } catch (e) {
        res.send("ERROR: UNABLE TO FIND PHOTO ID " + req.params.id, 404);
    }
})

router.post('/', async (req, res) => {
    console.log('body', req.body);
    try {

        const photoToCreate = req.body;

        const photoCreated = await Photo.create(photoToCreate)
        return res.json(photoCreated);
    } catch (e) {
        res.send("ERROR: UNABLE TO CREATE PHOTO" + req.body, 404);
    }
})

router.put('/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        console.log('body', req.body);
        const photoToUpdate = req.body.photo;

        const photoToUpdateFind = await Photo.update({ photoToUpdate }, {
            where: { id }
        })
        res.send('successfully updated photo ' + photoToUpdateFind);
    } catch (e) {
        res.send("ERROR: UNABLE TO UPDATE PHOTO WITH ID " + req.params.id, 404);
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    console.log('id',id);
    try {
        await Photo.destroy({
            where: { id }
        })
        res.send('successfully deleted photo ' + id);
    } catch (e) {
        res.send("ERROR: UNABLE TO DELETE PHOTO WITH ID " + req.params.id, 404);
    }
})

module.exports = router;
