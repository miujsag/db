const { fs } = require('mz')
const Bank = require('../schema')

async function seed () {
  try {
    const data = await fs.readFile('./lib/bank/seed/data.json')
    const banks = JSON.parse(data)
    const newBanks = []

    for (const bank of banks) {
      const newBank = await Bank.create(bank)

      newBanks.push(newBank)
    }

    console.log(`${newBanks.length} banks successfully created.`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = seed
