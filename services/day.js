const { format } = require("date-fns");
const { Day } = require("../models");

function today() {
  return Day.findOne({ where: { date: format(new Date(), "MM/DD") } });
}

function create(params) {
  return Day.create(params);
}

module.exports = {
  today,
  create,
};
