'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModelTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModelTokens.belongsTo(models.ModelClients, {
        foreignKey: 'clientId',
        as: 'client',
      });
      ModelTokens.belongsTo(models.ModelUsers, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  };
  ModelTokens.init({
    accessToken: DataTypes.STRING,
    accessTokenExpiresAt: DataTypes.DATE,
    refreshToken: DataTypes.STRING,
    refreshTokenExpiresAt: DataTypes.DATE,
    clientId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModelTokens',
  });
  return ModelTokens;
};