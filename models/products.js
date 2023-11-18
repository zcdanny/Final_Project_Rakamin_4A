"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
        products.belongsTo(models.store, { foreignKey: 'store_id' });
        products.hasMany(models.wishlist_products, { foreignKey: 'products_id' });
        products.hasMany(models.order_items, { foreignKey: 'products_id' });
    }
  }

  products.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      img_url: {
        type: DataTypes.STRING(255),
      },
      description: {
        type: DataTypes.TEXT,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      },
    },
    {
      sequelize,
      modelName: "products",
    }
  );

  return products;
};