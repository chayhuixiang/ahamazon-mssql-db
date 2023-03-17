'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemStatus.init({
    ItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATE,
      primaryKey: true
    },
    State: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['being processed', 'shipped', 'delivered', 'returned']]
      },
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Item-Statuses',
  });
  return ItemStatus;
};
