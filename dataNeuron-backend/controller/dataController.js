const Data = require("../models/DataModel");

// Add data
let addCount = 0;
let updateCount = 0;

exports.addData = async (req, res) => {
  try {
    const { content } = req.body;
    const newData = new Data({ content });
    await newData.save();
    addCount++;
    res.status(201).json({ message: "Data added successfully", data: content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateData = async (req, res) => {
  try {
    // need clarity to how we send the document id to update the data
    const { content } = req.body;
    const data = await Data.findOne({ content: content });
    console.log("data :", data);
    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }
    const id = data?._id;
    console.log("id :", id);
    updateCount++;
    await Data.findByIdAndUpdate(id, { content: `updated ${content}` });
    res.status(200).json({
      message: "Data updated successfully",
      data: `updated ${content}`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.countData = async (req, res) => {
  try {
    // dont have the clearity to store the per count in db for each user . So i am just using the global variable
    res.status(200).json({ addCount, updateCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
