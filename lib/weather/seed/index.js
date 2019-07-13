const { fs } = require('mz')
const Weather = require('../schema')

async function seed () {
  try {
    const data = await fs.readFile('./lib/weather/seed/data.json')
    const cities = JSON.parse(data)
    const newCities = []

    for (const city of cities) {
      const newCity = await Weather.create(city)

      newCities.push(newCity)
    }

    console.log(`${newCities.length} cities successfully created.`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = seed
