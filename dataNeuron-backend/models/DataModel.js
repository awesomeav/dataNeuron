const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "please enter content"],
    unique: true,
  },
});

module.exports = mongoose.model("Data", dataSchema);
