const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Rate = require('../rate/schema')

const Bank = sequelize.define('bank', {
  name: Sequelize.STRING,
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  description: Sequelize.TEXT
})

Rate.belongsTo(Bank)

Bank.hasMany(Rate)

module.exports = Bank
