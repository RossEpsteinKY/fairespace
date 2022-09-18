const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const app = express();
// const { isAuthenticated } = require('../middleware/auth');
// let groups = require('../../old_models/questions.model');
const {Group, Quizzes} = require("../../models/Group");
app.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', async (req, res) => {
    const groups = await Group.findAll()
    res.json(groups);
})

router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const group = await Group.findByPk(id)
        if (!quiz) {
            throw new Error('GROUP NOT FOUND');
        }
        // res.render('quiz/quiz',{quiz});
        res.json(group);
        return;
    } catch (e) {
        res.send("ERROR: UNABLE TO FIND GROUP ID " + req.params.id, 404);
    }
})

router.post('/', async (req, res) => {
    console.log('body', req.body);
    try {

        const groupToCreate = req.body;

        const groupCreated = await Group.create(groupToCreate)
        return res.json(groupCreated);
    } catch (e) {
        res.send("ERROR: UNABLE TO CREATE GROUP" + req.body, 404);
    }
})

router.put('/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        console.log('body', req.body);
        const groupToUpdate = req.body.group;

        const groupToUpdateFind = await Group.update({ groupToUpdate }, {
            where: { id }
        })
        res.send('successfully updated group ' + groupToUpdateFind);
    } catch (e) {
        res.send("ERROR: UNABLE TO UPDATE GROUP WITH ID " + req.params.id, 404);
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    console.log('id',id);
    try {
        await Group.destroy({
            where: { id }
        })
        res.send('successfully deleted group ' + id);
    } catch (e) {
        res.send("ERROR: UNABLE TO DELETE GROUP WITH ID " + req.params.id, 404);
    }
})

module.exports = router;
