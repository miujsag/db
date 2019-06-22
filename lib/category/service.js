const Category = require('./schema')

function lists () {
  return Category.findAll()
}

module.exports = {
  lists
}
