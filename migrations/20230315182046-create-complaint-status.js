'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Complaint-Statuses', {
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
      Date: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      State: {
        type: Sequelize.STRING,
        validate: {
          isIn: [['pending', 'being handled', 'addressed']]
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
    await queryInterface.dropTable('Complaint-Statuses');
  }
};