const globalData = require("../models/globalDataModel");

exports.insertData = async function (jsonArray) {
  try {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    const newData = new globalData({
      date: date,
      data: jsonArray,
    });

    // console.log(newData);
    const saveData = await newData.save();

    if (saveData) {
      console.log("Inserted global data");
    }
  } catch (error) {
    console.log(error);
  }
};
