'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      OrderID: {
        type: Sequelize.INTEGER,
        primary: true,
      },
      CustomerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'CustomerID'
        },
        allowNull: false,
      },
      "Date-time": {
        type: Sequelize.DATE,
        allowNull: false,
      },
      "Shipping-address": {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('Orders');
  }
};
