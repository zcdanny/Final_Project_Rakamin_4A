"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class wishlist_products extends Model {
    static associate(models) {
      wishlist_products.belongsTo(models.user, { foreignKey: "user_id" });
      wishlist_products.belongsTo(models.products, {
        foreignKey: "products_id",
      });
    }
  }

  wishlist_products.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "wishlist_products",
    }
  );

  return wishlist_products;
};
