const parser = require("xml2json");

exports.convertXMLToJson = async (xml) => {
  const json = parser.toJson(xml);
  return json;
};
