const mongoose = require("mongoose");

const vietnamDataSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true },
  data: { type: Array, required: true },
});

module.exports = vietnamData = mongoose.model(
  "vietnamDataSchema",
  vietnamDataSchema
);
