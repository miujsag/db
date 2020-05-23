require("dotenv").config();
const { seed } = require("./lib/seed");
const Site = require("./lib/site/service");
const Article = require("./lib/article/service");
const Day = require("./lib/day/service");
const Weather = require("./lib/weather/service");
const Bank = require("./lib/bank/service");
const Rate = require("./lib/rate/service");
const Category = require("./lib/category/service");

module.exports = {
  seed,
  Site,
  Article,
  Day,
  Weather,
  Bank,
  Rate,
  Category,
};
