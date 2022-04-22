
const express = require('express');
const router = express.Router();
// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

const UsuarioController = require('../controllers/UsuarioController');

//CRUD RESTful

router.get('/',  UsuarioController.holi);



module.exports = router;