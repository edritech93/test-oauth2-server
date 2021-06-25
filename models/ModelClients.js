'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelClients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModelClients.hasOne(models.ModelTokens, {
        foreignKey: 'clientId',
        as: 'token',
      });
    }
  };
  ModelClients.init({
    clientId: DataTypes.STRING,
    clientSecret: DataTypes.STRING,
    redirectUris: DataTypes.STRING,
    grants: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'ModelClients',
  });
  return ModelClients;
};