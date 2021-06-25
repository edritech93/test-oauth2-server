'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.hasOne(models.Users, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  };
  Transactions.init({
    amount: DataTypes.INTEGER,
    remark: DataTypes.STRING,
    attachmentUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};