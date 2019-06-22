const Sequelize = require('sequelize')
const sequelize = require('../db').getInstance()

const Article = require('../article/schema')

const Category = sequelize.define('category', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: 'compositeIndex'
  },
  alias: Sequelize.ARRAY(Sequelize.STRING)
})

Article.belongsTo(Category)
Category.hasMany(Article)

module.exports = Category
