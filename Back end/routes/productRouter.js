const ProductsController = require("../controllers/productController");
const router = require("express").Router();

router.get("/", ProductsController.getAllProducts);
router.get("/:id", ProductsController.getOneProducts);

module.exports = router;
