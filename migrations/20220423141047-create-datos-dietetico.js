'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Datos_dieteticos', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      numero_comidas_diarias: {
        type: Sequelize.INTEGER
      },
      preferncias: {
        type: Sequelize.INTEGER
      },
      nivel_apetito_diario: {
        type: Sequelize.STRING
      },
      horas_hambre_mas_intensidad: {
        type: Sequelize.STRING
      },
      que_suele_comer_diario: {
        type: Sequelize.STRING
      },
      que_suele_comer_fds: {
        type: Sequelize.STRING
      },
      tipo_preparaciones_aplicadas_comidas: {
        type: Sequelize.STRING
      },
      comidas_a_evitar: {
        type: Sequelize.STRING
      },
      alimentos_preferibles_a_su_plan: {
        type: Sequelize.STRING
      },
      lugares_habituales_de_compra: {
        type: Sequelize.STRING
      },
      alergias: {
        type: Sequelize.BOOLEAN
      },
      alergias_a: {
        type: Sequelize.STRING
      },
      intolerancia: {
        type: Sequelize.BOOLEAN
      },
      suplemento_alimenticio: {
        type: Sequelize.BOOLEAN
      },
      tratamiento_farmacologico: {
        type: Sequelize.BOOLEAN
      },
      tratamiento_farmacologico_a: {
        type: Sequelize.STRING
      },
      patologia_medica: {
        type: Sequelize.BOOLEAN
      },
      primera_dieta: {
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
    await queryInterface.dropTable('Datos_dieteticos');
  }
};