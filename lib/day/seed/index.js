const { fs } = require('mz')
const Day = require('../schema')

async function seed () {
  try {
    const data = await fs.readFile('./lib/day/seed/data.json')
    const days = JSON.parse(data)
    const newDays = []

    for (const day of days) {
      const newDay = await Day.create(day)

      newDays.push(newDay)
    }

    console.log(`${newDays.length} days successfully created.`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = seed
