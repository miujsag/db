"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate(models) {}
  }
  Day.init(
    {
      date: DataTypes.STRING,
      name: DataTypes.STRING,
      holiday: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Day",
    }
  );
  return Day;
};
