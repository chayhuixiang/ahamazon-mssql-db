'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StocksInBookstore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StocksInBookstore.init({
    StockID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    "Stock-Price": {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    "Stock-Qty": {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PubID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Publication',
        key: 'PubID'
      },
      allowNull: false
    },
    BookstoreID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Bookstore',
        key: 'BookstoreID'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Stocks-In-Bookstore',
  });
  return StocksInBookstore;
};
