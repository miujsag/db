const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Day = sequelize.define('day', {
  date: Sequelize.STRING,
  name: Sequelize.STRING,
  holiday: Sequelize.STRING,
})

module.exports = Day
