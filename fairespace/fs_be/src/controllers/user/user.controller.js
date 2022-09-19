const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const app = express();
var bcrypt = require("bcrypt-nodejs");

// const { isAuthenticated } = require('../middleware/auth');
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

router.post('/', async(req, res, next)=>{
    //res.status(201).json(req.body);
    //add new user and return 201
    const salt = await bcrypt.genSalt(10);
    var usr = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : await bcrypt.hash(req.body.password, salt)
    };
    let created_user = await User.create(usr);
    res.status(201).json(created_user);
});

// router.post('/', async (req, res) => {
//     console.log('body', req.body);
//     try {
//
//
//
//         // let password = "testing";
//         // let testEnc = bcrypt.hash(password, bcrypt.genSaltSync(8));
//         // console.log('test',testEnc);
//         //
//         // const userToCreate = req.body;
//         //
//         // // const userCreated = await User.create(userToCreate)
//         // // return res.json(userCreated);
//     } catch (e) {
//         res.send("ERROR: UNABLE TO CREATE USER" + req.body, 404);
//     }
// })

router.put('/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        console.log('body', req.body);
        const userToUpdate = req.body.user;

        const userToUpdateFind = await User.update({ userToUpdate }, {
            where: { id }
        })
        res.send('successfully updated user ' + userToUpdateFind);
    } catch (e) {
        res.send("ERROR: UNABLE TO UPDATE USER WITH ID " + req.params.id, 404);
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    console.log('id',id);
    try {
        await User.destroy({
            where: { id }
        })
        res.send('successfully deleted user ' + id);
    } catch (e) {
        res.send("ERROR: UNABLE TO DELETE USER WITH ID " + req.params.id, 404);
    }
})

module.exports = router;
