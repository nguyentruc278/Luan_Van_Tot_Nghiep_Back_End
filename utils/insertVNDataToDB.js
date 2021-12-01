const vietnamData = require("../models/vietnamDataModel");

exports.insertVNData = async function (jsonArray) {
  try {
    var currentDate = new Date();
    const newData = new vietnamData({
      date: currentDate,
      data: jsonArray,
    });

    const saveData = await newData.save();

    if (saveData) {
      console.log("Inserted Vietnam data");
    }
  } catch (error) {
    console.log(error);
  }
};
