// const { user } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');

const Receta_adquiridaController = {};

Receta_adquiridaController.holi = (req, res) => {
    res.send('holi soy receta_adquirida');
}

module.exports = Receta_adquiridaController;