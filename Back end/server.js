const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 3000;

app.use(express.json());

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
app.use("/orders", OrderRouter);
app.use("/products", ProductsRouter);

// Atur port yang akan digunakan oleh server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

module.exports = app;
