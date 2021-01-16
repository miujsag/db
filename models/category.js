"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Article, Category }) {
      Category.hasMany(Article);
      Article.belongsTo(Category);
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      alias: DataTypes.ARRAY(DataTypes.STRING),
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
