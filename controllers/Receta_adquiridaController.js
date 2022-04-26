const {Receta_adquirida} = require('../models/index');
const {Op} = require("sequelize");
const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');

const Receta_adquiridaController = {};

Receta_adquiridaController.get_all = async (req, res) => {

    let consulta = `SELECT users.nombre AS nombre, receta.nombre AS nombre, receta_adquiridas.id AS id, users.email AS email
    FROM users INNER JOIN receta_adquiridas
    ON users.id = receta_adquiridas.usuarioId INNER JOIN receta
    ON receta.id = receta_adquiridas.recetaId`;

    let resultado = await Receta_adquirida.sequelize.query(consulta, {
        type: Receta_adquirida.sequelize.QueryTypes.SELECT
    });

    if (resultado) {
        res.send(resultado);
    }

}

Receta_adquiridaController.new_acquisition = async (req, res) => {

    try {
        let body = req.body;

        console.log("este es body", body)

        Receta_adquirida.create({
                recetaID: body.recetaID,
                usuarioId: body.usuarioId,
            })
            .then(receta => {
                if (receta) {
                    res.send(receta)
                } else {
                    res.send("La creación de un nuevo receta ha fallado");
                }
            })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}

module.exports = Receta_adquiridaController;