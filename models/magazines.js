'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Magazines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Magazines.init({
    PubID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Issue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Magazines',
  });
  return Magazines;
};
