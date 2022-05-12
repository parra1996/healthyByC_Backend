'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tipo_actividad_laboral', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      laboral_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Actividad_psicosocial',
          as: 'laboral_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tipo_actividad: {
        type: Sequelize.STRING
      },
      frecuencia: {
        type: Sequelize.STRING
      },
      duracion: {
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
    await queryInterface.dropTable('tipo_actividad_laboral');
  }
};