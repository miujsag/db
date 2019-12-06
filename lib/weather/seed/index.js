const { fs } = require('mz')
const path = require('path')
const Weather = require('../schema')

async function seed () {
  try {
    const filePath = path.join(__dirname, 'data.json')
    const data = await fs.readFile(filePath)
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
