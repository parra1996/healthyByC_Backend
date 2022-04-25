'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tipo_actividad', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_actividad: {
        type: Sequelize.STRING,
      },
      duracion: {
        type: Sequelize.STRING
      },
      frecuencia_semanal: {
        type: Sequelize.STRING
      },
      momento_diario_realizado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tipo_actividad');
  }
};