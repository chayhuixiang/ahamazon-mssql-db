'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Item-Statuses', {
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
      Date: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      State: {
        type: Sequelize.STRING,
        validate: {
          isIn: [['being processed', 'shipped', 'delivered', 'returned']]
        },
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
    await queryInterface.dropTable('Item-Statuses');
  }
};