const {Dietas} = require('../models/index');
const {Op} = require("sequelize");
const bcrypt = require('bcrypt');

const DietasController = require('../controllers/DietasController');



DietasController.get_all =  (req,res) => {
    res.send("hola");
}
