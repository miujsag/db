"use strict";
module.exports = (sequelize, DataTypes) => {
  const article_selectors = sequelize.define(
    "ArticleSelector",
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      published_at: DataTypes.STRING,
      category: DataTypes.STRING,
      content: DataTypes.STRING,
      site: DataTypes.INTEGER,
    },
    {}
  );
  article_selectors.associate = function (models) {
    // associations can be defined here
  };
  return article_selectors;
};
