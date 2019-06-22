const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: 'postgres',
    timezone: 'Europe/Budapest',
    logging: false
  }
)

module.exports = {
  init: async opts => {
    await sequelize.authenticate()
    require('./site/schema.js')
    require('./archiveSelector/schema.js')
    require('./articleSelector/schema.js')
    require('./article/schema.js')
    require('./day/schema.js')
    require('./weather/schema.js')
    require('./bank/schema.js')
    require('./rate/schema.js')
    await sequelize.sync(opts)
    return sequelize
  },

  getInstance: () => sequelize
}
