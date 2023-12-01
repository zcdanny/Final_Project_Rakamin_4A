const router = require("express").Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/", verifyToken, userController.getAllUser);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.delete("/logout", userController.logout);

module.exports = router;
