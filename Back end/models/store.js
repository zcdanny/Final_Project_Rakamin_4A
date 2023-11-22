"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    static associate(models) {
      store.belongsTo(models.user, { foreignKey: "user_id" });
      store.hasMany(models.products, { foreignKey: "store_id" });
    }
  }

  store.init(
    {
      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      products_stocked: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      shop_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      shop_description: {
        type: DataTypes.TEXT,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "store",
    }
  );

  return store;
};
