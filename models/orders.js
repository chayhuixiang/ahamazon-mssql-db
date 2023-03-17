'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init({
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    CustomerID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'CustomerID'
      },
      allowNull: false,
    },
    "Date-time": {
      type: DataTypes.DATE,
      allowNull: false,
    },
    "Shipping-address": {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};
