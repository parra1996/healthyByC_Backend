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
      this.belongsTo(models.User, {
        foreignKey: 'datos_dieteticosID'
      });
    }
  }
  Datos_dietetico.init({
    numero_comidas_diarias: DataTypes.STRING,
    nivel_apetito_diario: DataTypes.STRING,
    horas_hambre_mas_intensidad: DataTypes.STRING,
    que_suele_comer_diario: DataTypes.STRING,
    que_suele_comer_fds: DataTypes.STRING,
    tipo_preparaciones_aplicadas_comidas: DataTypes.STRING,
    comidas_a_evitar: DataTypes.STRING,
    alimentos_preferibles_a_su_plan: DataTypes.STRING,
    lugares_habituales_de_compra: DataTypes.STRING,
    alergias: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Datos_dietetico',
  });
  return Datos_dietetico;
};