'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemsInOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemsInOrders.init({
    ItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    StockID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Stocks-In-Bookstore',
        key: 'StockID'
      },
      allowNull: false
    },
    OrderID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'OrderID'
      },
      allowNull: false
    },
    "Item-Price": {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    "Item-Qty": {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    "Delivery-date": {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Items-In-Orders',
  });
  return ItemsInOrders;
};
