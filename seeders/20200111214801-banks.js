'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', [{
      name: 'MNB',
      slug: 'mnb',
      description: 'Magyar Nemzeti Bank aktuális deviza középárfolyamai',
      created_at: new Date(),
      updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Banks', null, {});
  }
};
