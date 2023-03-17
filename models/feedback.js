'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Feedback.init({
    ItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'CustomerID'
      },
      allowNull: false
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    "Date-time": {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Feedbacks',
  });
  return Feedback;
};
