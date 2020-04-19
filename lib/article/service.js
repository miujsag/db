const { Op } = require("sequelize");
const Article = require("./schema");
const Site = require("../site/schema");
const Category = require("../category/schema");
const { createLogMessage } = require("logger");

function lists(siteIds, categoryIds, until, limit) {
  return Article.findAll({
    limit,
    where: {
      publishedAt: {
        [Op.lt]: until,
      },
    },
    order: [["publishedAt", "DESC"]],
    attributes: [
      "id",
      "title",
      "url",
      "description",
      "publishedAt",
      "estimatedReadTime",
      "extracted",
      "image",
    ],
    include: [
      {
        model: Category,
        where: {
          id: {
            [Op.in]: categoryIds,
          },
        },
      },
      {
        model: Site,
        where: {
          id: {
            [Op.in]: siteIds,
          },
        },
      },
    ],
  });
}

function listsInRange(siteIds, categoryIds, from, until) {
  return Article.findAll({
    where: {
      publishedAt: {
        [Op.lt]: until,
        [Op.gt]: from,
      },
    },
    order: [["publishedAt", "DESC"]],
    attributes: [
      "id",
      "title",
      "url",
      "description",
      "publishedAt",
      "estimatedReadTime",
      "extracted",
      "image",
    ],
    include: [
      {
        model: Category,
        where: {
          id: {
            [Op.in]: categoryIds,
          },
        },
      },
      {
        model: Site,
        where: {
          id: {
            [Op.in]: siteIds,
          },
        },
      },
    ],
  });
}

function count(siteIds, categoryIds) {
  return Article.count({
    include: [
      {
        model: Category,
        where: {
          id: {
            [Op.in]: categoryIds,
          },
        },
      },
      {
        model: Site,
        where: {
          id: {
            [Op.in]: siteIds,
          },
        },
      },
    ],
  });
}

function create(params, site, category) {
  return Article.create(params)
    .then(function (article) {
      if (site) article.setSite(site);
      if (category) article.setCategory(category);

      return article;
    })
    .catch(function (error) {
      if (error.name !== "SequelizeUniqueConstraintError") {
        throw new Error(
          createLogMessage({
            operation: "create article",
            site: site ? site.name : undefined,
            article: params ? params.title : undefined,
            category: category ? category.name : undefined,
            message: error.message,
          })
        );
      }
    });
}

function update(article, params, category) {
  const updatedArticle = {
    title: article.title || params.title,
    description: article.description || params.description,
    author: article.author || params.author,
    content: article.content || params.content,
    html: params.html,
    image: article.image || params.image,
    extracted: true,
  };

  return article
    .update(updatedArticle)
    .then(function (article) {
      if (category) article.setCategory(category);

      return article;
    })
    .catch(function (error) {
      if (error.name !== "SequelizeUniqueConstraintError") {
        throw new Error(
          createLogMessage({
            operation: "update article",
            article: params ? params.title : undefined,
            category: category ? category.name : undefined,
            message: error.message,
          })
        );
      }
    });
}

module.exports = {
  lists,
  create,
  update,
  count,
  listsInRange,
};
