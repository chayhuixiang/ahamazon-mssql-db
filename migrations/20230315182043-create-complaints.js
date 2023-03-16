'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Complaints', {
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
      CustomerID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Customers',
          key: 'CustomerID'
        },
        allowNull: false,
      },
      "Filed-Date-Time" : {
        type: Sequelize.DATE,
        allowNull: false
      },
      "Text" : {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Complaints');
  }
};
