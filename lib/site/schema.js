const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Article = require('../article/schema')
const ArchiveSelector = require('../archiveSelector/schema')
const ArticleSelector = require('../articleSelector/schema')

const Site = sequelize.define(
  'site',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'compositeIndex'
    },
    slug: Sequelize.STRING,
    url: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: 'compositeIndex'
    },
    state: {
      type: Sequelize.ENUM,
      values: ['active', 'inactive', 'selected']
    },
    feed: Sequelize.STRING
  },
  {
    hooks: {
      beforeCreate(site) {
      }
    }
  }
)

Article.belongsTo(Site)
ArchiveSelector.belongsTo(Site)
ArticleSelector.belongsTo(Site)

Site.hasMany(Article)
Site.hasOne(ArchiveSelector)
Site.hasOne(ArticleSelector)

module.exports = Site
