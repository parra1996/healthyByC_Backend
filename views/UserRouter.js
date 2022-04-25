
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UserController = require('../controllers/UserController');

//CRUD RESTful

router.get('/',  UserController.getAll);

router.post('/register',  UserController.register);



module.exports = router;