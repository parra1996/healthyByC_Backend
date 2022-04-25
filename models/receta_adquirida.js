'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receta_adquirida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Receta, {
        foreignKey: 'recetaID'
      });
      this.belongsTo(models.User, {
        foreignKey: 'usuarioId'
      });
    }
  }
  Receta_adquirida.init({
    recetaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    timestamps: false

  }, {
    sequelize,
    modelName: 'Receta_adquirida',
  });
  return Receta_adquirida;
};