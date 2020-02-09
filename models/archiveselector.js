'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArchiveSelector = sequelize.define('ArchiveSelector', {
    container: DataTypes.STRING,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    published_at: DataTypes.STRING,
    category: DataTypes.STRING,
    site_id: DataTypes.INTEGER
  }, {});
  ArchiveSelector.associate = function(models) {
    // associations can be defined here
  };
  return ArchiveSelector;
};