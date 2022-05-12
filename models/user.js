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
      this.hasOne(models.datos_dietetico,{
        foreignKey: 'dietetico_id'
      });
      this.hasOne(models.datos_antropometricos,{
        foreignKey: 'antropometricos_id'
      });
      this.hasOne(models.actividad_psicosocial,{
        foreignKey: 'psicosocial_id'
      });
    }
  }
  User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    profesion: DataTypes.STRING,
    sexo: DataTypes.BOOLEAN,
    objetivos_dieteticos: DataTypes.STRING,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};