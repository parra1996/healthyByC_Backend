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
      this.belongsTo(models.Actividad_psicosocial, {
        as: 't_actividad_id',
      })
    }
  }
  Tipo_actividad.init({
    tipo_actividad: DataTypes.STRING,
    duracion: DataTypes.STRING,
    tipo_de_actividad: DataTypes.STRING,
    frecuencia_semanal: DataTypes.STRING,
    momento_diario_realizado: DataTypes.STRING,
    timestamps: false

  }, {
    sequelize,
    modelName: 'Tipo_actividad',
  });
  return Tipo_actividad;
};