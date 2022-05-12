const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const DietasController = require('../controllers/DietasController');

router.get('/', DietasController.get_all);

module.exports = router;