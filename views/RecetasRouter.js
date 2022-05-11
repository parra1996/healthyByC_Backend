const express = require('express');
const router = express.Router();
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

const RecetasController = require('../controllers/RecetasController');

router.get('/', RecetasController.get_all);

router.get('/:id', auth,   RecetasController.bring_by_id);

router.post('/',  RecetasController.registrar_receta);

router.delete('/:id', auth, isAdmin,  RecetasController.delete_by_id);


module.exports = router;
