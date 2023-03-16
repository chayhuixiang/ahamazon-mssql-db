'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('Items-In-Orders', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      // ItemID: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true
      // },
      // StockID: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Stocks-In-Bookstores',
      //     key: 'StockID'
      //   },
      //   allowNull: false
      // },
      // OrderID: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //     model: 'Orders',
      //     key: 'OrderID'
      //   },
      //   allowNull: false
      // },
      // "Item-Price": {
      //   type: DataTypes.DECIMAL,
      //   allowNull: false
      // },
      // "Item-Qty": {
      //   type: DataTypes.DECIMAL,
      //   allowNull: false
      // },
      // "Delivery-date": {
      //   type: DataTypes.DATE,
      //   allowNull: false
      // }
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    // });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items-In-Orders');
  }
};
