"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    static associate({ Article, ArticleSelector, Site }) {
      Site.hasOne(ArticleSelector);
      Site.hasMany(Article);
      Article.belongsTo(Site);
    }
  }
  Site.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      url: DataTypes.STRING,
      state: {
        type: DataTypes.ENUM,
        values: ["active", "inactive", "selected"],
      },
      feed: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Site",
    }
  );
  return Site;
};
