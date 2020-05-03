const { Site, ArticleSelector } = require("../../models");

function lists(state = ["active"]) {
  return Site.findAll({
    where: {
      state,
    },
    include: [
      {
        model: ArticleSelector,
        as: "article_selector",
      },
    ],
  });
}

function get(id) {
  return Site.findOne({
    where: {
      id,
    },
    include: [
      {
        model: ArticleSelector,
        as: "article_selector",
      },
    ],
  });
}

function create(params) {
  return Site.create(params);
}

module.exports = {
  lists,
  get,
  create,
};
