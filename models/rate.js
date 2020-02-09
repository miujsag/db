'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rate = sequelize.define('Rate', {
    currency: DataTypes.STRING,
    value: DataTypes.FLOAT,
    did_grow: DataTypes.BOOLEAN,
    bank_id: DataTypes.INTEGER
  }, {});
  Rate.associate = function(models) {
    // associations can be defined here
  };
  return Rate;
};