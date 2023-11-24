'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        username: 'ramanda',
        email: 'ramanda@example.com',
        password: '123', 
        role: 'admin',
        created_at: new Date(),
      },
      {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: '123', 
        role: 'user',
        created_at: new Date(),
      },
      // Tambahkan pengguna lainnya di sini...
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
