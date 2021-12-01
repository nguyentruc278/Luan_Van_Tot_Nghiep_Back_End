const csvtojson = require("csvtojson");

exports.convertToJsonArr = async (csvFilePath) => {
  const jsonArray = await csvtojson().fromFile(csvFilePath);
  return jsonArray;
};
