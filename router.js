
const router = require('express').Router();


const UserRouter = require('./views/UserRouter');
const RecetasRouter = require('./views/RecetasRouter');
// const PedidosRouter = require('./views/PedidosRouter');

router.use('/users', UserRouter);
router.use('/recetas', RecetasRouter);
// router.use('/pedidos', PedidosRouter);

module.exports = router;