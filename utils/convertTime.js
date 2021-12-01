const moment = require("moment");

exports.convertTime = (data, format = "DD/MM") => {
  return moment(data).format(format);
};

exports.convertTimeWithYear = (data, format = "DD/MM/YYYY") => {
  return moment(data).format(format);
};

exports.convertTimeFullYear = (data, format = "YYYY/MM/DD") => {
  return moment(data).format(format);
};
