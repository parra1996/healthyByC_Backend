'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_actividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.actividad_psicosocial, {
        foreignKey: 'tipo_actividadID',
      });
    }
  }
  Tipo_actividad.init({
    tipo_actividadID: DataTypes.STRING,
    duracion: DataTypes.STRING,
    frecuencia_semanal: DataTypes.STRING,
    momento_diario_realizado: DataTypes.STRING,
    timestamps: false

  }, {
    sequelize,
    modelName: 'Tipo_actividad',
  });
  return Tipo_actividad;
};