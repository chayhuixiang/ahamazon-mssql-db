'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Handleds', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      ComplaintID: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employees',
          key: 'EmployeeID'
        },
        allowNull: false,
      },
      "Handled-Date-Time": {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Handleds');
  }
};
