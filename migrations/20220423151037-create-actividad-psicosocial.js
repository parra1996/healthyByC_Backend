'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actividad_psicosocial', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      psicosocial_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      horas_sueño: {
        type: Sequelize.INTEGER
      },
      actividades: {
        type: Sequelize.STRING
      },
      id_actividad: {
        type: Sequelize.INTEGER,
      },
      tipo_actividad_laboral: {
        type: Sequelize.STRING
      },
      numero_evacuaciones_diarios: {
        type: Sequelize.INTEGER
      },
      estres_diario: {
        type: Sequelize.STRING
      },
      frecuencia_bebidas_alcoholicas: {
        type: Sequelize.STRING
      },
      fumador: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Actividad_psicosocial');
  }
};