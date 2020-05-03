const { fs } = require("mz");
const path = require("path");
const { Bank } = require("../../../models");

async function seed() {
  try {
    const filePath = path.join(__dirname, "data.json");
    const data = await fs.readFile(filePath);
    const banks = JSON.parse(data);
    const newBanks = [];

    for (const bank of banks) {
      const newBank = await Bank.create(bank);

      newBanks.push(newBank);
    }

    console.log(`${newBanks.length} banks successfully created.`);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = seed;
