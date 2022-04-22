const express = require('express');
const router = express.Router();

const RecetasController = require('../controllers/RecetasController');

router.get('/',  RecetasController.holi);

module.exports = router;
