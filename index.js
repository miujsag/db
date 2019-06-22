require('dotenv').config()
const {fs} = require('mz')
const {init} = require('./lib/db')
const Site = require('./lib/site/service')
const Article = require('./lib/article/service')
const Day = require('./lib/day/service')
const Weather = require('./lib/weather/service')
const Bank = require('./lib/bank/service')
const Rate = require('./lib/rate/service')
const Category = require('./lib/category/service')

module.exports = {
  init,
  Site,
  Article,
  Day,
  Weather,
  Bank,
  Rate,
  Category
}

Article.lists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], new Date(), 1000)
  .then(articles => {
    return articles
      .filter(a => a.category && a.content)
      .map(a => {
      return {
        text: a.content, 
        category: a.category.name
      }
    })
  })
  .then(articles => {
    console.log(articles.length)
    return fs.writeFile('articles.json', JSON.stringify(articles), 'utf8')
  })
  .catch(console.log)
