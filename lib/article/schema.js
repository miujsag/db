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
  published_at: Sequelize.DATE,
  author: Sequelize.TEXT,
  extracted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  estimated_read_time: Sequelize.INTEGER,
  keywords: Sequelize.ARRAY(Sequelize.STRING),
  authors: Sequelize.ARRAY(Sequelize.STRING),
  image_url: Sequelize.STRING
}, {
  hooks: {
    beforeSave (article) {
      article.title = removeTags(article.title)

      if (article.description) {
        article.description = removeTags(article.description)
      }

      if (article.content) {
        article.content = removeTags(article.content)
        article.estimated_read_time = getReadingTime(article.content)
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
