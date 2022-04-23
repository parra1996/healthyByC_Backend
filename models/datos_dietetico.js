'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Datos_dietetico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Datos_dietetico.init({
    numero_comidas_diarias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Datos_dietetico',
  });
  return Datos_dietetico;
};