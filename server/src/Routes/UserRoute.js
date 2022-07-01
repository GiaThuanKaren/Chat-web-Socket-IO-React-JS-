const express = require('express');
const UserController = require('../Controller/USerController');
const router = express.Router();

router.get("/",UserController.getUser);


module.exports = router