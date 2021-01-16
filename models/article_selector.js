"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArticleSelector extends Model {
    static associate(models) {}
  }
  ArticleSelector.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      published_at: DataTypes.STRING,
      category: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ArticleSelector",
    }
  );
  return ArticleSelector;
};
