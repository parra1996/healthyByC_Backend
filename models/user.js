'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
      this.hasMany(models.Receta_adquirida, {
        foreignKey: 'usuarioId'
      });
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    edad: DataTypes.INTEGER,
    profesion: DataTypes.STRING,
    sexo: DataTypes.BOOLEAN,
    objetivos_dieteticos: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};