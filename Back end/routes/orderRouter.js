const OrderController = require("../controllers/orderController");
const router = require("express").Router();

router.get("/", OrderController.getAllOrders);
router.get("/:id", OrderController.getOneOrders);

module.exports = router;
