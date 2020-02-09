const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Rate = sequelize.define('rate', {
  currency: Sequelize.STRING,
  value: Sequelize.FLOAT,
  didGrow: Sequelize.BOOLEAN
})

module.exports = Rate
