'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Datos_antropometricos', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      antropometricos_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
      },
      altura: {
        type: Sequelize.FLOAT
      },
      peso_ayunas: {
        type: Sequelize.FLOAT
      },
      medidias_cm: {
        type: Sequelize.FLOAT
      },
      brazo: {
        type: Sequelize.FLOAT
      },
      cintura: {
        type: Sequelize.FLOAT
      },
      cadera: {
        type: Sequelize.FLOAT
      },
      muslo: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Datos_antropometricos');
  }
};