const vietnamData = require("../models/vietnamDataModel");
const { checkLevels } = require("../utils/checkLevelVNProvince");
const { convertTime, convertTimeWithYear } = require("../utils/convertTime");
const { getKeyProvince } = require("../utils/getKeyOfProvince");

exports.getVNDataTotal = async function (req, res) {
  try {
    const getAllData = await vietnamData.find({});
    if (getAllData) {
      let allData = getAllData[getAllData.length - 1].data;
      let date = convertTimeWithYear(getAllData[getAllData.length - 1].date);
      let caseTotal;
      let deathTotal;
      let recoveredTotal;
      let case24h;
      let death24h;
      let recovered24h;
      allData.forEach((data, index) => {
        caseTotal = data.total.internal.cases;
        deathTotal = data.total.internal.death;
        recoveredTotal = data.total.internal.recovered;
        case24h = data.today.internal.cases;
        death24h = data.today.internal.death;
        recovered24h = data.today.internal.recovered;
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: {
          date: date,
          caseTotal: caseTotal,
          deathTotal: deathTotal,
          recoveredTotal: recoveredTotal,
          case24h: case24h,
          death24h: death24h,
          recovered24h: recovered24h,
          recovered24h: recovered24h,
        },
      });
    } else {
      return res.json({
        status: false,
        msg: "Lấy dữ liệu thất bại",
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      msg: "Đã có lỗi xảy ra",
      error: error.message,
    });
  }
};

exports.getVNDataOverview = async function (req, res) {
  try {
    const getAllData = await vietnamData.find({});
    if (getAllData) {
      let allData = getAllData.slice(-30);
      let arrayTotal = [];
      let cases;
      let death;
      allData.forEach((date) => {
        let dateOverview = convertTime(date.date);
        let { data } = date;
        data.forEach((detail, index) => {
          cases = detail.today.internal.cases;
          death = detail.today.internal.death;
        });
        let object = {
          date: dateOverview,
          cases: cases,
          death: death,
        };
        arrayTotal.push(object);
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: arrayTotal,
      });
    } else {
      return res.json({
        status: false,
        msg: "Lấy dữ liệu thất bại",
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      msg: "Đã có lỗi xảy ra",
      error: error.message,
    });
  }
};

// exports.getVNProvinceData = async function (req, res) {
//   try {
//     const getAllData = await vietnamData.find({});
//     if (getAllData) {
//       let allData = getAllData[getAllData.length - 1].data;
//       let arrayTotal = [];
//       allData.forEach((data, index) => {
//         let provinces = data.locations;
//         provinces.forEach((property, index) => {
//           arrayTotal.push(property);
//         });
//       });
//       return res.json({
//         status: true,
//         msg: "Lấy dữ liệu thành công",
//         data: arrayTotal,
//       });
//     } else {
//       return res.json({
//         status: false,
//         msg: "Lấy dữ liệu thất bại",
//       });
//     }
//   } catch (error) {
//     return res.json({
//       status: false,
//       msg: "Đã có lỗi xảy ra",
//       error: error.message,
//     });
//   }
// };

exports.getVNProvinceData = async function (req, res) {
  try {
    const getAllData = await vietnamData.find({});
    if (getAllData) {
      let allData = getAllData[getAllData.length - 1].data;
      let name;
      let cases;
      let death;
      let casesToday;
      let arrayTotal = [];
      allData.forEach((data, index) => {
        let provinces = data.locations;
        provinces.forEach((property, index) => {
          Object.keys(property).forEach((provinceName, index) => {
            switch (provinceName) {
              case "name":
                name = property[provinceName];
                break;
              case "cases":
                cases = Number(property[provinceName]);
                break;
              case "casesToday":
                casesToday = Number(property[provinceName]);
                break;
              case "death":
                death = Number(property[provinceName]);
                break;
              default:
                break;
            }
          });
          let key = getKeyProvince(name, "key");
          let level = checkLevels(cases);
          let object = {
            name: name,
            key: key,
            cases: cases,
            casesToday: casesToday,
            death: death,
            level: level,
          };
          arrayTotal.push(object);
        });
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: arrayTotal,
      });
    } else {
      return res.json({
        status: false,
        msg: "Lấy dữ liệu thất bại",
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      msg: "Đã có lỗi xảy ra",
      error: error.message,
    });
  }
};
