const db = require("../models");
const products = db.products;

// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const Products = await products.findAll({});
    res.status(200).send(Products);
  } catch (error) {
    res.status(404).send(error);
  }
};

// Get Products by Id

const getOneProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const Products = await products.findOne({ where: { id: id } });
    res.status(200).send(Products);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProducts,
};
