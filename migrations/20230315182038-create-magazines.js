'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Magazines', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      PubID: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      Issue: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Title: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Magazines');
  }
};