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
      this.hasOne(models.Datos_dietetico,{
        foreignKey: 'dietetico_id'
      });
      this.hasOne(models.Datos_antropometricos,{
        foreignKey: 'antropometricos_id'
      });
      this.hasOne(models.Actividad_psicosocial,{
        foreignKey: 'psicosocial_id'
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
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    rol: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};