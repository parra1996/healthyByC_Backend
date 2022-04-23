'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Datos_antropometricos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'datos_antropometricoID'
      });
    }
  }
  Datos_antropometricos.init({
    altura: DataTypes.FLOAT,
    peso_ayunas: DataTypes.FLOAT,
    medidias_cm:  DataTypes.FLOAT,
    brazo: DataTypes.FLOAT,
    cintura: DataTypes.FLOAT,
    cadera: DataTypes.FLOAT,
    muslo: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Datos_antropometricos',
  });
  return Datos_antropometricos;
};