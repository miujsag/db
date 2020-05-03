"use strict";
module.exports = (sequelize, DataTypes) => {
  const sites = sequelize.define(
    "Site",
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
    {}
  );
  sites.associate = function ({ Article, ArticleSelector, Site }) {
    Article.belongsTo(Site, {
      foreignKey: "site",
      targetKey: "id",
    });

    Site.hasOne(ArticleSelector, {
      as: "article_selector",
      foreignKey: "site",
      sourceKey: "id",
    });
  };
  return sites;
};
