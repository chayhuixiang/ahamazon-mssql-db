'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComplaintsOnOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ComplaintsOnOrder.init({
    ComplaintID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    OrderID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'OrderID'
      },
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Complaints-on-Order',
  });
  return ComplaintsOnOrder;
};
