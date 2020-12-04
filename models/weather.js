"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    static associate(models) {}
  }
  Weather.init(
    {
      city: DataTypes.STRING,
      openweather_id: DataTypes.INTEGER,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      current_temperature: DataTypes.FLOAT,
      minimum_temperature: DataTypes.FLOAT,
      maximum_temperature: DataTypes.FLOAT,
      icon: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Weather",
    }
  );
  return Weather;
};
