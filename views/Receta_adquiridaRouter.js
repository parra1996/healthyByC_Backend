const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const Receta_adquiridaController = require('../controllers/Receta_adquiridaController');

router.get('/', auth, Receta_adquiridaController.get_all);

router.get('/:id', auth,   Receta_adquiridaController.get_by_id);

router.post('/', Receta_adquiridaController.new_acquisition);

router.delete('/:id', auth, Receta_adquiridaController.delete_by_id);

module.exports = router;