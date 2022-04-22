const express = require('express');
const router = express.Router();

const Receta_adquiridaController = require('../controllers/Receta_adquiridaController');

router.get('/',  Receta_adquiridaController.holi);

module.exports = router;