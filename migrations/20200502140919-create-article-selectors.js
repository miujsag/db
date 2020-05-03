"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ArticleSelectors", {
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
      category: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.STRING,
      },
      site: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sites",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ArticleSelectors");
  },
};
