("use strict");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ArticleKeyword extends Model {
    static associate({ Article, Keyword, ArticleKeyword }) {
      Article.belongsToMany(Keyword, { through: ArticleKeyword });
      Keyword.belongsToMany(Article, { through: ArticleKeyword });
      Article.hasMany(ArticleKeyword);
      ArticleKeyword.belongsTo(Article);
      Keyword.hasMany(ArticleKeyword);
      ArticleKeyword.belongsTo(Keyword);
    }
  }

  ArticleKeyword.init(
    {
      published_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ArticleKeyword",
    }
  );

  return ArticleKeyword;
};
