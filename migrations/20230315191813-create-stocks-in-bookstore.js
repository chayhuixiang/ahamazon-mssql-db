'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks-In-Bookstores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StockID: {
        type: Sequelize.INTEGER
      },
      Stock - Price: {
        type: Sequelize.FLOAT
      },
      Stock - Qty: {
        type: Sequelize.INTEGER
      },
      PubID: {
        type: Sequelize.INTEGER
      },
      BookstoreID: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Stocks-In-Bookstores');
  }
};