"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Rates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      currency: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.FLOAT,
      },
      did_grow: {
        type: Sequelize.BOOLEAN,
      },
      bank: {
        type: Sequelize.INTEGER,
        references: {
          model: "Banks",
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
    return queryInterface.dropTable("Rates");
  },
};
