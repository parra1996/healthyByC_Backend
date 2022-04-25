const express = require('express');
const router = express.Router();

const RecetasController = require('../controllers/RecetasController');

router.get('/',  RecetasController.get_all);

router.get('/',  RecetasController.bring_by_id);

router.post('/',  RecetasController.registrar_receta);


module.exports = router;
