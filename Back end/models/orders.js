"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      orders.belongsTo(models.user, { foreignKey: "user_id" });
      orders.hasMany(models.order_items, { foreignKey: "orders_id" });
      orders.hasMany(models.order_items, { foreignKey: "orders_id" });
    }
  }

  orders.init(
    {
      payment_method: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    },

    {
      sequelize,
      modelName: "orders",
    }
  );

  return orders;
};
