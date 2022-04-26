const express = require('express');
const router = express.Router();

const RecetasController = require('../controllers/RecetasController');

router.get('/',  RecetasController.get_all);

router.get('/:id',  RecetasController.bring_by_id);

router.post('/',  RecetasController.registrar_receta);

router.delete('/:id',  RecetasController.delete_by_id);


module.exports = router;
