// const { user } = require('../models/index');
const { Op } = require("sequelize");
const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');

const RecetasController = {};

RecetasController.get_all = (req, res) => {
    try {
        Recetas.findAll()
            .then(data => {
                res.send(data)
            });
    } catch (error) {
        res.send(error)
    }
}

module.exports = RecetasController;