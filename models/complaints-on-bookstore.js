'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComplaintsOnBookstore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ComplaintsOnBookstore.init({
    ComplaintID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    BookstoreID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bookstore',
        key: 'BookstoreID'
      },
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Complaints-on-Bookstore',
  });
  return ComplaintsOnBookstore;
};
