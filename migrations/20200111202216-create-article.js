'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'compositeIndex'
      },
      description: {
        type: Sequelize.TEXT
      },
      html: {
        type: Sequelize.TEXT
      },
      content: {
        type: Sequelize.TEXT
      },
      published_at: {
        type: Sequelize.DATE
      },
      extracted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      estimated_read_time: {
        type: Sequelize.INTEGER
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      authors: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      image_url: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      site_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};