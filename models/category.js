'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    alias: DataTypes.ARRAY
  }, {});
  Category.associate = function(models) {
    models.Article.belongsTo(Category, {
      foreignkey: 'category_id', as: 'category_id'
    })
    Category.hasMany(models.Article)
  };
  return Category;
};