'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RECETA_ADQUIRIDA extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RECETA_ADQUIRIDA.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RECETA_ADQUIRIDA',
  });
  return RECETA_ADQUIRIDA;
};