const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Weather = sequelize.define('weather', {
  city: Sequelize.STRING,
  openweatherId: Sequelize.INTEGER,
  longitude: Sequelize.FLOAT,
  latitude: Sequelize.FLOAT,
  currentTemperature: Sequelize.FLOAT,
  minimumTemperature: Sequelize.FLOAT,
  maximumTemperature: Sequelize.FLOAT,
  icon: Sequelize.STRING,
  description: Sequelize.STRING
})

module.exports = Weather
