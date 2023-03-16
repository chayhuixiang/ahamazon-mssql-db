'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComplaintStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ComplaintStatus.init({
    ComplaintID: {
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
        isIn: [['pending', 'being handled', 'addressed']]
      },
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Complaint-Status',
  });
  return ComplaintStatus;
};
