const { Site, ArticleSelector } = require("../models");

function lists(state = ["active"]) {
  return Site.findAll({
    where: {
      state,
    },
    include: [ArticleSelector],
  });
}

function get(id) {
  return Site.findOne({
    where: {
      id,
    },
    include: [ArticleSelector],
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
