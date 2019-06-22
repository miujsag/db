const Site = require('./schema')
const ArticleSelector = require('../articleSelector/schema')
const ArchiveSelector = require('../archiveSelector/schema')

function lists (state = ['active', 'selected']) {
  return Site.findAll({
    where: {
      state
    }, 
    include: [ArticleSelector, ArchiveSelector]
  })
}

function get (id) {
  return Site.findOne({
    where: {
      id
    },
    include: [ArticleSelector]
  })
}

function create (params) {
  return Site.create(params)
}

module.exports = {
  lists,
  get,
  create
}
