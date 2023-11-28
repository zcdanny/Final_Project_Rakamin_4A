"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("store", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      products_stocked: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      shop_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      shop_description: {
        type: Sequelize.TEXT,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("store");
  },
};
