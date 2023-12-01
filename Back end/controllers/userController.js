const { user } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Get All User
const getAllUser = async (req, res) => {
  try {
    const User = await user.findAll({
      attributes: ["id", "username", "email"],
    });
    return res.json({
      status: 200,
      message: "All User",
      data: User,
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

//Register user
const register = async (req, res) => {
  const { username, email, password, role, confpassword } = req.body;
  if (password !== confpassword)
    return res.json({
      status: 400,
      message: "Password dan Confirm Password Tidak Cocok!",
    });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await user.create({
      username: username,
      email: email,
      role: role,
      password: hashPassword,
    });
    return res.json({
      status: 200,
      message: "Register Berhasil",
    });
  } catch (error) {
    res.status(404).send(error);
  }
};

//Login user
const login = async (req, res) => {
  try {
    const User = await user.findAll({
      where: {
        email: req.body.email,
      },
    });
    const match = await bcrypt.compare(req.body.password, User[0].password);
    if (!match)
      return res.json({
        status: 400,
        message: "Password Salah",
      });
    const userId = User[0].id;
    const username = User[0].username;
    const email = User[0].email;
    const accesToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "20s",
    });
    const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    await user.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accesToken });
  } catch (error) {
    res.json({
      status: 404,
      message: " Email tidak ditemukan!",
    });
  }
};

// Log Out User
const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const User = await user.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!User[0]) return res.sendStatus(204);
  const userId = User[0].id;
  await user.update(
    { refresh_token: null },
    {
      where: {
        id: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

module.exports = {
  getAllUser,
  register,
  login,
  logout,
};
