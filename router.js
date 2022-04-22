
const router = require('express').Router();


const UserRouter = require('./views/UserRouter');
const RecetasRouter = require('./views/RecetasRouter');
const Receta_adquiridaRouter = require('./views/Receta_adquiridaRouter');

router.use('/users', UserRouter);
router.use('/recetas', RecetasRouter);
router.use('/receta_adquirida', Receta_adquiridaRouter);

module.exports = router;