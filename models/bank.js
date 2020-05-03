"use strict";
module.exports = (sequelize, DataTypes) => {
  const banks = sequelize.define(
    "Bank",
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {}
  );
  return banks;
};
