const { Bank } = require("../../models");

function lists() {
  return Bank.findAll();
}

function getBy(query) {
  return Bank.findOne({
    where: query,
  });
}

module.exports = {
  lists,
  getBy,
};
