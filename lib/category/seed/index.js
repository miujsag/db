const { fs } = require("mz");
const path = require("path");
const { Category } = require("../../../models");

async function seed() {
  try {
    const filePath = path.join(__dirname, "data.json");
    const data = await fs.readFile(filePath);
    const categories = JSON.parse(data);
    const newCategories = [];

    for (const category of categories) {
      const newCategory = await Category.create(category);

      newCategories.push(newCategory);
    }

    console.log(`${newCategories.length} categories successfully created.`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = seed;
