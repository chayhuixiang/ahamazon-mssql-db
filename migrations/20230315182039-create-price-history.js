'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Price-Histories', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      StockID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      "Start-Date": {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
      },
      "End-Date": {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
      },
      Price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
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
    await queryInterface.dropTable('price-histories');
  }
};
