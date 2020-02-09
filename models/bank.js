'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('Bank', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Bank.associate = function(models) {
    models.Rate.belongsTo(Bank, {
      foreignkey: 'bank_id', as: 'bank_id'
    })
    Bank.hasMany(models.Rate)
  };
  return Bank;
};