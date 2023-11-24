'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('store', [
      {
        user_id: 1, // Ganti dengan ID pengguna yang telah ada di tabel 'user'
        location: 'Location A',
        products_stocked: 50,
        shop_name: 'Shop A',
        shop_description: 'Description for Shop A',
      },
      {
        user_id: 2, // Ganti dengan ID pengguna yang lain jika ada di tabel 'user'
        location: 'Location B',
        products_stocked: 30,
        shop_name: 'Shop B',
        shop_description: 'Description for Shop B',
      },
      // Tambahkan data toko lainnya di sini...
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('store', null, {});
  },
};
