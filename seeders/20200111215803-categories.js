'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'belföld',
        alias: ['belföld', 'belfold', 'itthon', 'kozelet', 'közélet', 'budapest', 'ketharmad', 'belpol'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'külföld',
        alias: ['külföld', 'kulfold', 'nagyvilag', 'nagyvilág', 'vilag', 'világ', 'amerika-london-parizs', 'kulpol'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'gazdaság',
        alias: ['gazdaság', 'gazdasag', 'penz', 'pénz', 'kkv'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'sport',
        alias: ['sport', 'f1', 'futball', 'foci', 'hajra-magyarok'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'kultúra',
        alias: ['kultúra', 'zene', 'kultura', 'kultur'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'tudomány',
        alias: ['tudomány', 'tudomany', 'tech', 'techbazis', 'techtud'],
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'szórakozás',
        alias: ['tv', 'teve', 'tévé', 'szórakozás', 'szorakozas', 'tafelspicc', 'táfelspicc'],
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
