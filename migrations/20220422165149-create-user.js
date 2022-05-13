'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      profesion: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.BOOLEAN
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      contrasena: {
        type: Sequelize.STRING
      },
      rol: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('Users');
  }
};