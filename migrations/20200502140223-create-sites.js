"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sites", {
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
    return queryInterface.dropTable("Sites");
  },
};
