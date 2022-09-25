const express = require('express');
const router = express.Router();
const {request, response} = require("express");
const {param} = require("express/lib/router");
const bodyParser = require('body-parser');
const session = require('cookie-session');
const authController = require('./src/controllers/auth/auth.controller');
const userController = require('./src/controllers/user/user.controller');
const photosController = require('./src/controllers/photo/photo.controller');
const accountInfoController = require('./src/controllers/account/account.controller');
const friendsController = require('./src/controllers/friends/friends.controller');
const groupController = require('./src/controllers/group/group.controller');

const app = express();
require('dotenv').config();
const {
    Model, Sequelize
} = require('sequelize');

app.use(
    session({
        saveUninitialized: false,
        name: 'session',
        secret: 'T3s7!ng',
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hour expiration token
    })
);

app.use(bodyParser.urlencoded({ extended: false }))
app.set('views',__dirname + '/src/views');
app.set('view engine','twig');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/auth', authController);
app.use('/user', userController);
app.use('/photos', photosController);
app.use('/group', groupController);
app.use('/account', accountInfoController);
app.use('/friends', friendsController);

app.listen(5000);
console.log('Listening on port 5000!');

module.exports = router;
