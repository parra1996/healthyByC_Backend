'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_actividad_laboral extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tipo_actividad_laboral.init({
    frecuencia: DataTypes.STRING,
    duracion: DataTypes.STRING,
    timestamps: false

  }, {
    sequelize,
    modelName: 'Tipo_actividad_laboral',
  });
  return Tipo_actividad_laboral;
};