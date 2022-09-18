const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const app = express();
const { isAuthenticated } = require('../middleware/auth');
// let users = require('../../old_models/questions.model');
const {User, Quizzes} = require("../../models/User");
app.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users);
})

router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const user = await User.findByPk(id)
        if (!quiz) {
            throw new Error('USER NOT FOUND');
        }
        // res.render('quiz/quiz',{quiz});
        res.json(user);
        return;
    } catch (e) {
        res.send("ERROR: UNABLE TO FIND USER ID " + req.params.id, 404);
    }
})

router.post('/', async (req, res) => {
    console.log('body', req.body);
    try {

        const userToCreate = req.body;

        const userCreated = await User.create(userToCreate)
        return res.json(userCreated);
    } catch (e) {
        res.send("ERROR: UNABLE TO CREATE USER" + req.body, 404);
    }
})


// router.get('/',isAuthenticated, async (req, res) => {
//     const questions = await Questions.findAll()
//     res.render('questions/index',{questions});
// })
