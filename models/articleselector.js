'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleSelector = sequelize.define('ArticleSelector', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    published_at: DataTypes.STRING,
    category: DataTypes.STRING,
    content: DataTypes.STRING,
    site_id: DataTypes.INTEGER
  }, {});
  ArticleSelector.associate = function(models) {
    // associations can be defined here
  };
  return ArticleSelector;
};