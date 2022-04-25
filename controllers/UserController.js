const { User } = require('../models/index');

const {Op} = require("sequelize");
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');
const jwt = require('jsonwebtoken');

const UserController = {};

UserController.getAll = (req, res) => {
    try {
        User.findAll()
            .then(data => {
                res.send(data)
            });
    } catch (error) {
        res.send(error)
    }
}

UserController.register = (req, res) => {
    
    let nombre = req.body.nombre;
    let edad = req.body.edad;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let profesion = req.body.profesion;
    let sexo = req.body.sexo;
    let objetivos_dieteticos = req.body.objetivos_dieteticos;
    let rol = req.body.rol;
    console.log("antes de encriptar",req.body.contrasena);
    let contrasena = bcrypt.hashSync(req.body.contrasena, Number.parseInt(authConfig.rounds)); 
    
    console.log("despues de encriptar",contrasena);
    
    if(sexo == "hombre"){
        sexo = true;
    }else {
        sexo = false;
    }
    console.log(sexo);
    
    User.findAll({
        where : {
            [Op.or] : [
                {
                    email : {
                        [Op.like] : email
                    }
                },
            ]
        }

    }).then(datosRepetidos => {

        if(datosRepetidos == 0){

                User.create({
                nombre: nombre,
                apellido: apellido,
                fecha_nacimiento: fecha_nacimiento,
                edad: edad,
                profesion: profesion,
                sexo: sexo,
                objetivos_dieteticos: objetivos_dieteticos,
                email: email,
                contrasena: contrasena,
                rol : rol
            }).then(usuario => {
                res.send(`${usuario.nombre}, te has registrado con exito`);
            })
            .catch((error) => {
                res.send(error);
            });

        }else {
            res.send("El usuario con ese e-mail ya existe en nuestra base de datos");
        }
    }).catch(error => {
        res.send(error)
    });


}

module.exports = UserController;