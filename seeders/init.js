"use strict";
const sitesData = require("../data/sites");
const categoriesData = require("../data/categories");
const weatherData = require("../data/weather");
const daysData = require("../data/days");
const banksData = require("../data/banks");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sites = [];
    const articleSelectors = [];

    sitesData.forEach(function (site, index) {
      const currentIndex = index + 1;
      const { selectors, archive, ...remainingSiteData } = site;

      sites.push({ ...remainingSiteData, id: currentIndex });
      articleSelectors.push({
        ...selectors.article,
        id: currentIndex,
        site_id: currentIndex,
      });
    });

    await queryInterface.bulkInsert("sites", sites);
    await queryInterface.bulkInsert("article_selectors", articleSelectors);
    await queryInterface.bulkInsert("categories", categoriesData);
    await queryInterface.bulkInsert("weather", weatherData);
    await queryInterface.bulkInsert("days", daysData);
    await queryInterface.bulkInsert("banks", banksData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("banks");
    await queryInterface.bulkDelete("days");
    await queryInterface.bulkDelete("weather");
    await queryInterface.bulkDelete("categories");
    await queryInterface.bulkDelete("article_selectors");
    await queryInterface.bulkDelete("sites");
  },
};
