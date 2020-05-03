"use strict";
module.exports = (sequelize, DataTypes) => {
  const days = sequelize.define(
    "Day",
    {
      date: DataTypes.STRING,
      name: DataTypes.STRING,
      holiday: DataTypes.STRING,
    },
    {}
  );
  days.associate = function (models) {
    // associations can be defined here
  };
  return days;
};
