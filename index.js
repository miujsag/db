require("dotenv").config();
const Site = require("./services/site");
const Article = require("./services/article");
const Day = require("./services/day");
const Weather = require("./services/weather");
const Bank = require("./services/bank");
const Rate = require("./services/rate");
const Category = require("./services/category");
const Keyword = require("./services/keyword");

module.exports = {
  Site,
  Article,
  Day,
  Weather,
  Bank,
  Rate,
  Category,
  Keyword,
};

function fin() {
  console.log("fin");
}
/* 
Site.lists().then(console.log).catch(console.log).finally(fin); */
