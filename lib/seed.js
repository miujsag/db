require('dotenv').config()
const {logError, logInfo} = require('logger')
const sequelize = require('./db')
const seedSites = require('./site/seed')
const seedCategories = require('./category/seed')
const seedDays = require('./day/seed')
const seedWeather = require('./weather/seed')
const seedBank = require('./bank/seed')
const Article = require('./article/schema')

async function seed () {
  try {
    await sequelize.init()
    
    await Promise.all([
      seedSites(),
      seedCategories(),
      seedDays(),
      seedWeather(),
      seedBank()
    ])
  } catch (error) {
    logError(error.message)
  } finally {
    process.exit()
  }
}

seed()
