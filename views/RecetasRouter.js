const express = require('express');
const router = express.Router();

const RecetasController = require('../controllers/RecetasController');

router.get('/',  RecetasController.get_all);

module.exports = router;
