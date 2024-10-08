const express = require('express');
const router = express.Router();

const {checkAuth} = require('../middleware/checkAuth');

//user routes
const userController = require('../controllers/userController/createUser');

// Correct route path
router.post('/createUser', checkAuth, userController);

//login
const loginUser = require('../controllers/userController/loginuser')
router.post('/login',loginUser.loginUser)

module.exports=router;