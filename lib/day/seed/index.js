const { fs } = require("mz");
const path = require("path");
const { Day } = require("../../../models");

async function seed() {
  try {
    const filePath = path.join(__dirname, "data.json");
    const data = await fs.readFile(filePath);
    const days = JSON.parse(data);
    const newDays = [];

    for (const day of days) {
      const newDay = await Day.create(day);

      newDays.push(newDay);
    }

    console.log(`${newDays.length} days successfully created.`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = seed;
