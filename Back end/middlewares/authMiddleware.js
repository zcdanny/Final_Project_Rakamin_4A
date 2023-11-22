const jwt = require("jsonwebtoken");
const { user } = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
      return res.sendStatus(401);
    }

    const user = jwt.verify(token, process.env.JWT_SECRETKEY);
    const foundUser = await user.findOne({
      where: { id: user.id }, // Berdasarkan ID yang di-decode dari token
    });

    if (!foundUser) {
      return res.status(404).json({ error: "User not found" });
    }

    req.loggedUser = {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
      // Jika diperlukan, Anda bisa menambahkan lebih banyak properti pengguna di sini
    };

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = authMiddleware;
