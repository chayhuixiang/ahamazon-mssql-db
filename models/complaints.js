'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Complaints extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Complaints.init({
    ComplaintID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'CustomerID'
      },
      allowNull: false,
    },
    "Filed-Date-Time" : {
      type: DataTypes.DATE,
      allowNull: false
    },
    "Text" : {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Complaints',
  });
  return Complaints;
};
