// const { Usuario } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');

const UsuarioController = {};

UsuarioController.holi = (req, res) => {
    res.send('holi');
}

module.exports = UsuarioController;
