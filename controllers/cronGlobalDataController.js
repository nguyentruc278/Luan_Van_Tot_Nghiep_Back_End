const { default: axios } = require("axios");
const fs = require("fs");
const path = require("path");
const { convertToJsonArr } = require("../utils/csvToJson");
const { insertData } = require("../utils/insertDataToDB");

exports.getData = async () => {
  try {
    //Đường dẫn tới file
    const filePath = process.cwd() + "\\temp\\covid19.csv";
    //Tạo stream ghi vào file
    const file = fs.createWriteStream(filePath);
    //Tải file về
    const csv = await axios.get(
      "https://covid19.who.int/WHO-COVID-19-global-table-data.csv",
      { responseType: "stream" }
    );
    //Ghi dữ liệu vào file
    csv.data.pipe(file);
    file.on("finish", () => {
      console.log("ok");
    });
    file.on("error", () => {
      throw "Lỗi";
    });
    //Chuyển từ CSV -> +JSON
    const jsonArray = await convertToJsonArr(filePath);
    //Lưu dữ liệu lên mongo
    await insertData(jsonArray);
    //Xoá file
    await fs.unlink(filePath, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
