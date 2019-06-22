const Weather = require('./schema')

function lists () {
  return Weather.findAll()
}

function getBy (query) {
  return Weather.findOne({
    where: query
  })
}

function update (weather, params) {
  return weather.update(params)
}

module.exports = {
  lists,
  getBy,
  update
}
