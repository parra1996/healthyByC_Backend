// const { user } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');

const RecetasController = {};

RecetasController.holi = (req, res) => {
    res.send('holi');
}

module.exports = RecetasController;