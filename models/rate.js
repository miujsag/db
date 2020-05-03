"use strict";
module.exports = (sequelize, DataTypes) => {
  const rates = sequelize.define(
    "Rate",
    {
      currency: DataTypes.STRING,
      value: DataTypes.FLOAT,
      did_grow: DataTypes.BOOLEAN,
      bank: DataTypes.INTEGER,
    },
    {}
  );
  rates.associate = function (models) {
    // associations can be defined here
  };
  return rates;
};
