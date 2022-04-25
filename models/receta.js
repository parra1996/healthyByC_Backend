'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Receta_adquirida, {
        foreignKey: 'recetaID'
      });
    }
  }
  Receta.init({
    nombre: DataTypes.STRING,
    ingredientes: DataTypes.STRING,
    preparacion: DataTypes.STRING,
    imagen: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Receta',
  });
  return Receta;
};