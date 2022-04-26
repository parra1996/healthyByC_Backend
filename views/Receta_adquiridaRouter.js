const express = require('express');
const router = express.Router();

const Receta_adquiridaController = require('../controllers/Receta_adquiridaController');

router.get('/',  Receta_adquiridaController.get_all);

router.post('/', Receta_adquiridaController.new_acquisition);

module.exports = router;