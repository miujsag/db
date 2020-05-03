const Sequelize = require("sequelize");
const sequelize = require("../db").getInstance();

const Day = sequelize.define("days", {
  date: Sequelize.STRING,
  name: Sequelize.STRING,
  holiday: Sequelize.STRING,
});

module.exports = Day;
