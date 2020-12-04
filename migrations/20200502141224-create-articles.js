"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.TEXT,
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
      },
      html: {
        type: Sequelize.TEXT,
      },
      content: {
        type: Sequelize.TEXT,
      },
      published_at: {
        type: Sequelize.DATE,
      },
      extracted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      estimated_read_time: {
        type: Sequelize.INTEGER,
      },
      author: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
      },
      category_id: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("articles");
  },
};
