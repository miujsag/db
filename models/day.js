'use strict';
module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define('Day', {
    date: DataTypes.STRING,
    name: DataTypes.STRING,
    holiday: DataTypes.STRING
  }, {});
  Day.associate = function(models) {
    // associations can be defined here
  };
  return Day;
};