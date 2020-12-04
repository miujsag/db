"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("sites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: "compositeIndex",
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: "compositeIndex",
      },
      slug: {
        type: Sequelize.STRING,
      },
      feed: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.ENUM,
        values: ["active", "inactive", "dead"],
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
    return queryInterface.dropTable("sites");
  },
};
