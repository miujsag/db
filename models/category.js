"use strict";
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
      alias: DataTypes.ARRAY(DataTypes.STRING),
    },
    {}
  );
  categories.associate = function ({ Article, Category }) {
    Article.belongsTo(Category, {
      foreignKey: "category",
      targetKey: "id",
    });
  };
  return categories;
};
