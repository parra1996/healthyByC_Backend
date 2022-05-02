'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actividad_psicosocial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Tipo_actividad, {
        foreignKey: 'id',
      });
      // this.hasOne(models.Tipo_actividad_laboral, {
      //   as: 'id',
      // });
    }
  }
  Actividad_psicosocial.init({

    horas_sueño: DataTypes.INTEGER,
    actividades: DataTypes.STRING,
    id_actividad: DataTypes.INTEGER,
    id_laboral: DataTypes.INTEGER,
    numero_evacuaciones_diarios: DataTypes.INTEGER,
    estres_diario: DataTypes.STRING,
    frecuencia_bebidas_alcoholicas: DataTypes.STRING,
    fumador: DataTypes.BOOLEAN,
    timestamps: false

  }, {
    sequelize,
    modelName: 'Actividad_psicosocial',
  });
  return Actividad_psicosocial;
};