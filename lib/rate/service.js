const { Op } = require("sequelize");
const { Rate } = require("../../models");

function lists(bankId, currencies = ["EUR", "GBP"]) {
  return Rate.findAll({
    where: {
      bank: bankId,
      currency: {
        [Op.in]: currencies,
      },
    },
  });
}

function create(params, bank) {
  return Rate.create(params)
    .then(function (rate) {
      rate.bank = bank.id;

      return rate.save();
    })
    .catch((error) => error);
}

function update(rate, params) {
  rate.did_grow = didGrow(rate, params);

  return rate.update(params);
}

function didGrow(oldRate, newRate) {
  const newValue = parseFloat(newRate.value);

  if (oldRate.value === newValue) {
    return oldRate.did_grow;
  } else if (oldRate.value > newValue) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  lists,
  create,
  update,
};
