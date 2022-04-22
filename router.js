
const router = require('express').Router();


const UserRouter = require('./views/UserRouter');
// const PeliculasRouter = require('./views/PeliculasRouter');
// const PedidosRouter = require('./views/PedidosRouter');

router.use('/users', UserRouter);
// router.use('/peliculas', PeliculasRouter);
// router.use('/pedidos', PedidosRouter);

module.exports = router;