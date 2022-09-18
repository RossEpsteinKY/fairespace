const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const app = express();
// const { isAuthenticated } = require('../middleware/auth');
// let accounts = require('../../old_models/questions.model');
const {Account, Quizzes} = require("../../models/Account");
app.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', async (req, res) => {
    const accounts = await Account.findAll()
    res.json(accounts);
})

router.get('/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const account = await Account.findByPk(id)
        if (!quiz) {
            throw new Error('ACCOUNT NOT FOUND');
        }
        // res.render('quiz/quiz',{quiz});
        res.json(account);
        return;
    } catch (e) {
        res.send("ERROR: UNABLE TO FIND ACCOUNT ID " + req.params.id, 404);
    }
})

router.post('/', async (req, res) => {
    console.log('body', req.body);
    try {

        const accountToCreate = req.body;

        const accountCreated = await Account.create(accountToCreate)
        return res.json(accountCreated);
    } catch (e) {
        res.send("ERROR: UNABLE TO CREATE ACCOUNT" + req.body, 404);
    }
})

router.put('/:id', async (req, res) => {

    try {
        const id = Number(req.params.id);
        console.log('body', req.body);
        const accountToUpdate = req.body.account;

        const accountToUpdateFind = await Account.update({ accountToUpdate }, {
            where: { id }
        })
        res.send('successfully updated account ' + accountToUpdateFind);
    } catch (e) {
        res.send("ERROR: UNABLE TO UPDATE ACCOUNT WITH ID " + req.params.id, 404);
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    console.log('id',id);
    try {
        await Account.destroy({
            where: { id }
        })
        res.send('successfully deleted account ' + id);
    } catch (e) {
        res.send("ERROR: UNABLE TO DELETE ACCOUNT WITH ID " + req.params.id, 404);
    }
})

module.exports = router;
