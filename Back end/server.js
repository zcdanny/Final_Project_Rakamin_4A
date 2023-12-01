const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const port = 3000;

app.use(express.json());
app.use(cors());
dotenv.config();
app.use(cookieParser());

// API Documentation
const swaggerUi = require("swagger-ui-express");
const apiDocumentation = require("./apidocs.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

// API Test
app.get("/", (req, res, next) => {
  res.send("API TEST!");
});

// Routers
const OrderRouter = require("./routes/orderRouter");
const ProductsRouter = require("./routes/productRouter");
const UserRouter = require("./routes/userRouter");
app.use("/api/order", OrderRouter);
app.use("/api/product", ProductsRouter);
app.use("/api/user", UserRouter);

// Atur port yang akan digunakan oleh server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

module.exports = app;
