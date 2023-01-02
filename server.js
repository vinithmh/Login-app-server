const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routerUrls = require("./routers/routes");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(cors());
app.use("/", routerUrls);
app.listen(5000, () => console.log("Server is running"));