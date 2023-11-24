'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Handphone',
        img_url: 'https://example.com/product1.jpg',
        description: 'Description for Product 1',
        stock: 10,
        price: 299.99,
        category: 1,
        created_at: new Date(),
        store_id: 1,
      },
      {
        name: 'baju anak',
        img_url: 'https://example.com/product2.jpg',
        description: 'Description for Product 2',
        stock: 20,
        price: 199.99,
        category: 2,
        created_at: new Date(),
        store_id: 2,
      },
      // Tambahkan produk lainnya di sini...
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  },
};
