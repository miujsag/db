const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const ArticleSelector = sequelize.define('article_selector', {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  publishedAt: Sequelize.STRING,
  category: Sequelize.STRING,
  content: Sequelize.STRING
})

module.exports = ArticleSelector
