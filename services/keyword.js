const { Op } = require("sequelize");
const { Article, Keyword, ArticleKeyword } = require("../models");
const { createLogMessage } = require("logger");

function lists(from, until) {
  return ArticleKeyword.findAndCountAll({
    /* where: {
      published_at: {
        [Op.gt]: from,
        [Op.lt]: until,
      },
    }, */
    include: [Article, Keyword],
  });
}

function create(params, article) {
  return Keyword.create(params)
    .then(function (keyword) {
      return keyword.addArticle(article, {
        through: { published_at: article.published_at },
      });
    })
    .catch(function (error) {
      if (error.name !== "SequelizeUniqueConstraintError") {
        throw new Error(
          createLogMessage({
            operation: "create keyword",
            keyword: params ? params.word : undefined,
            article: article ? article.title : undefined,
            message: error.message,
          })
        );
      }
    });
}

module.exports = {
  lists,
  create,
};
