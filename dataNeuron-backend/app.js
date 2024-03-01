const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");

const dataRouter = require("./routes/DataRoutes");
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:3000",
  })
);
app.use("/api/v1", dataRouter);
module.exports = app;
