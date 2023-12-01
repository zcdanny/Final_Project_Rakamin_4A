"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasOne(models.store, { foreignKey: "user_id" });
      user.hasMany(models.wishlist_products, { foreignKey: "user_id" });
      user.hasMany(models.orders, { foreignKey: "user_id" });
    }
  }

  user.init(
    {
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      refresh_token: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "user",
      freezeTableName: true,
    }
  );

  return user;
};
