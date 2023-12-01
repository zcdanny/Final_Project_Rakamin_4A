const { products } = require("../models");

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const Products = await products.findAll({});
    return res.json({
      status: 200,
      message: "All Products",
      data: Products,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get Products by Id
const getOneProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const Products = await products.findOne({ where: { id: id } });
    return res.json({
      status: 200,
      message: "Products by Id",
      data: Products,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProducts,
};
