const { default: axios } = require("axios");
const fs = require("fs");
const { insertVNData } = require("../utils/insertVNDataToDB");

exports.getData = async () => {
  try {
    //Tải file về
    const file = await axios.get("https://static.pipezero.com/covid/data.json");

    //Lưu dữ liệu lên mongo
    await insertVNData(file.data);
  } catch (error) {
    console.log(error);
  }
};
