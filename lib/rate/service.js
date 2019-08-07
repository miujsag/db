const { Op } = require('sequelize')
const Rate = require('./schema')

function lists (bankId, currencies = ['EUR', 'GBP']) {
  return Rate.findAll({
    where: {
      bankId,
      currency: {
        [Op.in]: currencies
      }
    }
  })
}

function create (params, bank) {
  return Rate
    .create(params)
    .then(rate => rate.setBank(bank))
    .catch(error => error)
}

function update (rate, params) {
  rate.didGrow = didGrow(rate, params)

  return rate.update(params)
}

function didGrow (oldRate, newRate) {
  const newValue = parseFloat(newRate.value)

  if (oldRate.value === newValue) {
    return oldRate.didGrow
  } else if (oldRate.value > newValue) {
    return true
  } else {
    return false
  }
}

module.exports = {
  lists,
  create,
  update
}
