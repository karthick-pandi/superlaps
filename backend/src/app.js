const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/product.routes");
const adminRoutes = require("./routes/admin.routes");
const swagger = require("./swagger");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", productRoutes);
app.use("/api/admin", adminRoutes);

swagger(app);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);