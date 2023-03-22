'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Handled extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Handled.init({
    ComplaintID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Employees',
        key: 'EmployeeID'
      },
      allowNull: false,
    },
    "Handled-Date-Time": {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Handleds',
  });
  return Handled;
};
