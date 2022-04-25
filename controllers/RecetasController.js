const { Receta } = require('../models/index');
const {Op} = require("sequelize");
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

RecetasController.registrar_receta = (req, res) => {
    //Registrando un usuario

    let nombre = req.body.nombre;
    let ingredientes = req.body.ingredientes;
    let preparacion = req.body.preparacion;
    let imagen = req.body.imagen;

    //Comprobación de errores.....

    //Guardamos en sequelize el usuario
    Receta.findAll({
        where: {

            [Op.or]: [{
                nombre: {
                    [Op.like]: nombre
                }
            }, ]
        }

    }).then(datosRepetidos => {

        if (datosRepetidos == 0) {

            Receta.create({
                    nombre: nombre,
                    ingredientes: ingredientes,
                    preparacion: preparacion,
                    imagen: imagen
                }).then(receta => {
                    res.send(`${receta.nombre}, agregada a la base de datos`);
                })
                .catch((error) => {
                    res.send(error);
                });

        } else {
            res.send("esta receta ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });

}

RecetasController.bring_by_id = (req, res) => {
    Receta.findByPk(req.params.id)
    .then(data => {
        res.send(data)
    });
}

module.exports = RecetasController;