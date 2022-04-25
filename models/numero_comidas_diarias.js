'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Numero_comidas_diarias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Numero_comidas_diarias.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Numero_comidas_diarias',
  });
  return Numero_comidas_diarias;
};