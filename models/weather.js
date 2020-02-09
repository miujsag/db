'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weather = sequelize.define('Weather', {
    city: DataTypes.STRING,
    openweather_id: DataTypes.INTEGER,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    current_temperature: DataTypes.FLOAT,
    minimum_temperature: DataTypes.FLOAT,
    maximum_temperature: DataTypes.FLOAT
  }, {});
  Weather.associate = function(models) {
    // associations can be defined here
  };
  return Weather;
};