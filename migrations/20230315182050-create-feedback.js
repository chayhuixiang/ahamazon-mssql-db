'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Feedbacks', {
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
      CustomerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'CustomerID'
        },
        allowNull: false
      },
      Comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      "Date-time": {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Rating: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Feedbacks');
  }
};
