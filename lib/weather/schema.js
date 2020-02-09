const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Weather = sequelize.define('weather', {
  city: Sequelize.STRING,
  openweather_id: Sequelize.INTEGER,
  longitude: Sequelize.FLOAT,
  latitude: Sequelize.FLOAT,
  current_temperature: Sequelize.FLOAT,
  minimum_temperature: Sequelize.FLOAT,
  maximum_temperature: Sequelize.FLOAT,
  icon: Sequelize.STRING,
  description: Sequelize.STRING
})

module.exports = Weather
