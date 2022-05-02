
const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const UserController = require('../controllers/UserController');

//CRUD RESTful

router.get('/', auth ,  UserController.get_all);

router.post('/login',  UserController.login);

router.post('/register',  UserController.register);

router.delete('/:id',auth, isAdmin, UserController.delete_by_id);

router.put('/', UserController.modify_password);







module.exports = router;