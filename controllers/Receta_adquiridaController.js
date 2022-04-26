const {Receta_adquirida} = require('../models/index');
const { Op} = require("sequelize");
const bcrypt = require('bcrypt');
// const authConfig = require('../config/auth');
// const jwt = require('jsonwebtoken');

const Receta_adquiridaController = {};

Receta_adquiridaController.get_all = (req, res) => {
    // let consulta = `SELECT users.nombre AS name, recetas.nombre AS nombre, receta_adquerida.id AS id, users.email AS email
    // FROM users INNER JOIN receta_adquerida 
    // ON users.id = receta_adquerida.usuarioId INNER JOIN receta 
    // ON receta.id = receta_adquerida.recetaID `;

    // let resultado = await Pedido.sequelize.query(consulta, {
    //     type: Pedido.sequelize.QueryTypes.SELECT
    // });

    // if (resultado) {
    //     res.send(resultado);
    // }
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