require("dotenv").config();
const { logError, logInfo } = require("logger");
const seedSites = require("./site/seed");
const seedCategories = require("./category/seed");
const seedDays = require("./day/seed");
const seedWeather = require("./weather/seed");
const seedBank = require("./bank/seed");

async function seed() {
  console.log("seed");
  try {
    await Promise.all([
      seedSites(),
      seedCategories(),
      seedDays(),
      seedWeather(),
      seedBank(),
    ]);
  } catch (error) {
    logError(error.message);
  } finally {
    process.exit();
  }
}

module.exports = {
  seed,
};
