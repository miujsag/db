"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("weather", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        type: Sequelize.STRING,
      },
      openweather_id: {
        type: Sequelize.INTEGER,
      },
      longitude: {
        type: Sequelize.FLOAT,
      },
      latitude: {
        type: Sequelize.FLOAT,
      },
      current_temperature: {
        type: Sequelize.FLOAT,
      },
      minimum_temperature: {
        type: Sequelize.FLOAT,
      },
      maximum_temperature: {
        type: Sequelize.FLOAT,
      },
      icon: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("weather");
  },
};
