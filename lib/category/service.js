const { Category } = require("../../models");

function lists() {
  return Category.findAll();
}

module.exports = {
  lists,
};
