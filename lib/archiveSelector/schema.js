const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const ArchiveSelector = sequelize.define('archive_selector', {
  container: Sequelize.STRING,
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  description: Sequelize.STRING,
  publishedAt: Sequelize.STRING,
  category: Sequelize.STRING,
})

module.exports = ArchiveSelector
