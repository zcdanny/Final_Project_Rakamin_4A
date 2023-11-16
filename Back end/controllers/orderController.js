const db = require("../models");
const order = db.orders;

// Get All Orders
const getAllOrders = async (req, res) => {
  try {
    const Order = await order.findAll({});
    return res.json({
      status: 200,
      message: "All Order",
      data: Order,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get Orders by Id
const getOneOrders = async (req, res) => {
  try {
    const id = req.params.id;
    const Order = await order.findOne({ where: { id: id } });
    res.status(200).send(Order);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getAllOrders,
  getOneOrders,
};
