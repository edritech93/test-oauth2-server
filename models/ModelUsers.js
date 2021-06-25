'use strict';
const bcrypt = require('bcrypt-nodejs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModelUsers.hasOne(models.ModelTokens, {
        foreignKey: 'userId',
        as: 'token',
      });
    }
  };
  ModelUsers.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ModelUsers',
  });
  ModelUsers.beforeSave((user) => {
    if (user.changed('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  return ModelUsers;
};