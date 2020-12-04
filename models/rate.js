"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rate extends Model {
    static associate(models) {}
  }
  Rate.init(
    {
      currency: DataTypes.STRING,
      value: DataTypes.FLOAT,
      did_grow: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Rate",
    }
  );
  return Rate;
};
