const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Rate = sequelize.define('rate', {
  currency: Sequelize.STRING,
  value: Sequelize.FLOAT,
  did_grow: Sequelize.BOOLEAN
})

module.exports = Rate
