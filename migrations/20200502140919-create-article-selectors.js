"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("article_selectors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.STRING,
      },
      published_at: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      site_id: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("article_selectors");
  },
};
