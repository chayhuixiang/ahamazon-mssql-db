'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks-In-Bookstores', {
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
      "Stock-Price": {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      "Stock-Qty": {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PubID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Publications',
          key: 'PubID'
        },
        allowNull: false
      },
      BookstoreID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bookstores',
          key: 'BookstoreID'
        },
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
    await queryInterface.dropTable('Stocks-In-Bookstores');
  }
};
