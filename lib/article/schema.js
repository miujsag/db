const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()
const readingTime = require('reading-time')

const Article = sequelize.define('article', {
  title: Sequelize.STRING,
  url: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  description: Sequelize.TEXT,
  html: Sequelize.TEXT,
  content: Sequelize.TEXT,
  publishedAt: Sequelize.DATE,
  author: Sequelize.TEXT,
  extracted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  estimatedReadTime: Sequelize.INTEGER
}, {
  hooks: {
    beforeSave (article) {
      article.title = removeTags(article.title)

      if (article.description) {
        article.description = removeTags(article.description)
      }

      if (article.content) {
        article.content = removeTags(article.content)
        article.estimatedReadTime = getReadingTime(article.content)
      }
    }
  }
})

function getReadingTime (content) {
  if (!content) return undefined

  return Math.round(readingTime(content).time)
}

function removeTags (text) {
  return text ? text.replace(/<(?:.|\n)*?>/gm, '').trim() : ''
}

module.exports = Article
