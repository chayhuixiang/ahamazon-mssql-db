'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PriceHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PriceHistory.init({
    StockID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    "Start-Date": {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
    },
    "End-Date": {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
    },
    Price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Price-History',
  });
  return PriceHistory;
};
