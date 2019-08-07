const { fs } = require('mz')
const Category = require('../schema')

async function seed () {
  try {
    const data = await fs.readFile('./lib/category/seed/data.json')
    const categories = JSON.parse(data)
    const newCategories = []

    for (const category of categories) {
      const newCategory = await Category.create(category)

      newCategories.push(newCategory)
    }

    console.log(`${newCategories.length} categories successfully created.`)
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = seed
