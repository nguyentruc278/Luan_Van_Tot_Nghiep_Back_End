const mongoose = require("mongoose");

const globalDataSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true },
  data: { type: Array, required: true },
});

module.exports = globalData = mongoose.model(
  "globalDataSchema",
  globalDataSchema
);
