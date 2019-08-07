require('dotenv').config()
const { init } = require('./lib/db')
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
