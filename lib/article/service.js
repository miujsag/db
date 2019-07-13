const { Op } = require('sequelize')
const Article = require('./schema')
const Site = require('../site/schema')
const Category = require('../category/schema')

function lists (siteIds, categoryIds, until, limit) {
  return Article.findAll({
    limit,
    where: {
      publishedAt: {
        [Op.lt]: until
      }
    },
    order: [['publishedAt', 'DESC']],
    /* attributes: ['id', 'title', 'url', 'description', 'publishedAt', 'estimatedReadTime', 'extracted'], */
    include: [
      {
        model: Category,
        where: {
          id: {
            [Op.in]: categoryIds
          }
        }
      }, {
        model: Site,
        where: {
          id: {
            [Op.in]: siteIds
          }
        }
      }
    ]
  })
}

function create (params, site, category) {
  return Article
    .create(params)
    .then(function (article) {
      if (site) article.setSite(site)
      if (category) article.setCategory(category)

      return article
    })
    .catch(function (error) {
      if (error.name !== 'SequelizeUniqueConstraintError') {
        const message = `
operation: 'create article',
site: ${site ? site.name : undefined}
article: ${params ? params.title : undefined}
category: ${category ? category.name : undefined}
message: ${error.message}`

        throw new Error(message)
      }
    })
}

function update (article, params, category) {
  const updatedArticle = {
    title: article.title || params.title,
    description: article.description || params.description,
    author: article.author || params.author,
    content: article.content || params.content,
    html: params.html,
    extracted: true
  }

  return article
    .update(updatedArticle)
    .then(function (article) {
      if (category) article.setCategory(category)

      return article
    })
    .catch(function (error) {
      if (error.name !== 'SequelizeUniqueConstraintError') {
        const message = `
operation: 'update article',
article: ${params ? params.title : undefined}
category: ${category ? category.name : undefined}
message: ${error.message}`

        throw new Error(message)
      }
    })
}

module.exports = {
  lists,
  create,
  update
}
