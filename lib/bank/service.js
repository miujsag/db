const Bank = require('./schema')

function lists () {
  return Bank.findAll()
}

function getBy (query) {
  return Bank.findOne({
    where: query
  })
}

module.exports = {
  lists,
  getBy
}
