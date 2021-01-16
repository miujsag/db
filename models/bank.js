"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bank extends Model {
    static associate({ Bank, Rate }) {
      Bank.hasMany(Rate);
      Rate.belongsTo(Bank);
    }
  }
  Bank.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Bank",
    }
  );
  return Bank;
};
