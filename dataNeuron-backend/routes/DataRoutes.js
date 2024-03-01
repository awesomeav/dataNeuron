const express = require("express");
const dataController = require("../controller/dataController");

const dataRouter = express.Router();

dataRouter.post("/add", dataController.addData);
dataRouter.put("/update", dataController.updateData);
dataRouter.get("/count", dataController.countData);

module.exports = dataRouter;
