'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items-In-Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ItemID: {
        type: Sequelize.INTEGER
      },
      StockID: {
        type: Sequelize.INTEGER
      },
      OrderID: {
        type: Sequelize.INTEGER
      },
      "Item-Price": {
        type: Sequelize.FLOAT
      },
      "Item-Qty": {
        type: Sequelize.FLOAT
      },
      "Delivery-date": {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Items-In-Orders');
  }
};
