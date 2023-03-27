'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items-In-Orders', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      ItemID: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      StockID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Stocks-In-Bookstores',
          key: 'StockID'
        },
        allowNull: false
      },
      OrderID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'OrderID'
        },
        allowNull: false
      },
      "Item-Price": {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      "Item-Qty": {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      "Delivery-date": {
        type: Sequelize.DATE,
        allowNull: false
      }
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
    await queryInterface.dropTable('Items-In-Orders');
  }
};
