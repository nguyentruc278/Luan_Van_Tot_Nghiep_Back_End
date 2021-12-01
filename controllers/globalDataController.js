const globalData = require("../models/globalDataModel");
const { convertTime, convertTimeWithYear } = require("../utils/convertTime");
const { trimAllSpace } = require("../utils/trimAllSpace");
const { getTranslate } = require("../utils/translateCountryName");
const { checkLevels } = require("../utils/checkLevels");

exports.getAllData = async function (req, res) {
  try {
    const getAllData = await globalData.find({});
    if (getAllData) {
      let lastDayData = getAllData[getAllData.length - 1].data;
      lastDayData.shift();
      let name;
      let region;
      let caseTotal;
      let case24h;
      let deathTotal;
      let death24h;
      let array = [];
      lastDayData.forEach((country, index) => {
        Object.keys(country).forEach((property, index) => {
          switch (property) {
            case "Name":
              name = country[property];
              break;
            case "WHO Region":
              region = country[property];
              break;
            case "Cases - cumulative total":
              caseTotal = country[property];
              break;
            case "Deaths - cumulative total":
              deathTotal = country[property];
              break;
            case "Cases - newly reported in last 24 hours":
              case24h = country[property];
              break;
            case "Deaths - newly reported in last 24 hours":
              death24h = country[property];
              break;
            default:
              break;
          }
        });
        let countryName = getTranslate(name, "vietnamese");
        let IOS3 = getTranslate(name, "iso");
        let caseTotalNum = Number(caseTotal);
        let case24hNum = Number(case24h);
        let deathTotalNum = Number(deathTotal);
        let death24hNum = Number(death24h);
        let level = checkLevels(caseTotalNum);
        let object = {
          name: countryName,
          region: region,
          IOS3: IOS3,
          case24h: case24hNum,
          caseTotal: caseTotalNum,
          death24h: death24hNum,
          deathTotal: deathTotalNum,
          level: level,
        };
        array.push(object);
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: array,
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

exports.getDataCaseChart = async (req, res) => {
  try {
    let findCountry = "Global";
    const allDate = await globalData.find({});
    if (allDate) {
      let lastData = allDate.slice(-30);
      //Xu Ly Data
      let case24h;
      let death24h;
      let date24h;
      let array = [];
      lastData.forEach((date) => {
        const dateConvert = convertTime(date.date);
        date24h = dateConvert;
        let { data } = date;
        data.forEach((country, index) => {
          if (country.Name === findCountry) {
            Object.keys(country).forEach((property, index) => {
              switch (property) {
                case "Cases - newly reported in last 24 hours":
                  case24h = country[property];
                  break;
                case "Deaths - newly reported in last 24 hours":
                  death24h = country[property];
                  break;
                default:
                  break;
              }
            });
          }
        });
        let object = {
          date: date24h,
          case24h: case24h,
          death24h: death24h,
        };
        array.push(object);
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: array,
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

exports.getTotalData = async (req, res) => {
  try {
    let findCountry = trimAllSpace(req.params.country).toLowerCase();
    const getAllData = await globalData.find({});
    if (getAllData) {
      let lastDayData = getAllData[getAllData.length - 1].data;
      let lastDay = getAllData[getAllData.length - 1].date;
      let date = convertTimeWithYear(lastDay);
      let caseTotal;
      let deathTotal;
      let case24h;
      let death24h;
      lastDayData.forEach((country, index) => {
        if (trimAllSpace(country.Name).toLowerCase() === findCountry) {
          Object.keys(country).forEach((property, index) => {
            switch (property) {
              case "Cases - cumulative total":
                caseTotal = country[property];
                break;
              case "Deaths - cumulative total":
                deathTotal = country[property];
                break;
              case "Cases - newly reported in last 24 hours":
                case24h = country[property];
                break;
              case "Deaths - newly reported in last 24 hours":
                death24h = country[property];
                break;
              default:
                break;
            }
          });
        }
      });
      if (caseTotal && deathTotal) {
        return res.json({
          status: true,
          msg: "Lấy dữ liệu thành công",
          data: {
            date: date,
            country: findCountry,
            caseTotal: caseTotal,
            deathTotal: deathTotal,
            case24h: case24h,
            death24h: death24h,
          },
        });
      } else {
        return res.json({
          status: false,
          msg: "Lấy dữ liệu thất bại",
        });
      }
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

exports.getRegionCase = async function (req, res) {
  try {
    const getAllData = await globalData.find({});
    if (getAllData) {
      let last30days = getAllData.slice(-30);
      let array = [];
      last30days.forEach((date) => {
        const dateConvert = convertTime(date.date);
        let dateOfRegion = dateConvert;
        let { data } = date;
        //Bien tam
        let region;
        let caseAmericas = 0;
        let caseEurope = 0;
        let caseSEAsia = 0;
        let caseEasternMediterranean = 0;
        let caseAfrica = 0;
        let caseWesternPacific = 0;
        let deathAmericas = 0;
        let deathEurope = 0;
        let deathSEAsia = 0;
        let deathEasternMediterranean = 0;
        let deathAfrica = 0;
        let deathWesternPacific = 0;
        data.forEach((country, index) => {
          Object.keys(country).forEach((property, index) => {
            switch (property) {
              case "WHO Region":
                let tempCase = Number(
                  country["Cases - newly reported in last 24 hours"]
                );
                let tempDeath = Number(
                  country["Deaths - newly reported in last 24 hours"]
                );
                region = country[property];
                switch (region) {
                  case "Americas":
                    caseAmericas += tempCase;
                    deathAmericas += tempDeath;
                    break;
                  case "Europe":
                    caseEurope += tempCase;
                    deathEurope += tempDeath;
                    break;
                  case "South-East Asia":
                    deathSEAsia += tempDeath;
                    caseSEAsia += tempCase;
                    break;
                  case "Eastern Mediterranean":
                    deathEasternMediterranean += tempDeath;
                    caseEasternMediterranean += tempCase;
                    break;
                  case "Africa":
                    deathAfrica += tempDeath;
                    caseAfrica += tempCase;
                    break;
                  case "Western Pacific":
                    deathWesternPacific += tempDeath;
                    caseWesternPacific += tempCase;
                    break;
                  default:
                    break;
                }
              default:
                break;
            }
          });
        });
        // array data of every day
        let object = {
          date: dateOfRegion,
          AmericasCase: caseAmericas,
          AmericasDeath: deathAmericas,
          EuropeCase: caseEurope,
          EuropeDeath: deathEurope,
          SouthEastAsiaCase: caseSEAsia,
          SouthEastAsiaDeath: deathSEAsia,
          EasternMediterraneanCase: caseEasternMediterranean,
          EasternMediterraneanDeath: deathEasternMediterranean,
          AfricaCase: caseAfrica,
          AfricaDeath: deathAfrica,
          WesternPacificCase: caseWesternPacific,
          WesternPacificDeath: deathWesternPacific,
        };
        array.push(object);
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: array,
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

exports.getRegionCaseTotal = async function (req, res) {
  try {
    const getAllData = await globalData.find({});
    if (getAllData) {
      let lastDayData = getAllData[getAllData.length - 1].data;
      //Bien tam
      let region;
      let arrayCase = [];
      let caseAmericas = 0;
      let caseEurope = 0;
      let caseSEAsia = 0;
      let caseEasternMediterranean = 0;
      let caseAfrica = 0;
      let caseWesternPacific = 0;
      lastDayData.forEach((country, index) => {
        Object.keys(country).forEach((property, index) => {
          switch (property) {
            case "WHO Region":
              let tempCase = Number(country["Cases - cumulative total"]);
              region = country[property];
              switch (region) {
                case "Americas":
                  caseAmericas += tempCase;
                  break;
                case "Europe":
                  caseEurope += tempCase;
                  break;
                case "South-East Asia":
                  caseSEAsia += tempCase;
                  break;
                case "Eastern Mediterranean":
                  caseEasternMediterranean += tempCase;
                  break;
                case "Africa":
                  caseAfrica += tempCase;
                  break;
                case "Western Pacific":
                  caseWesternPacific += tempCase;
                  break;
                default:
                  break;
              }
            default:
              break;
          }
        });
      });
      // array data of every region
      arrayCase.push({
        regionName: "Americas",
        regionCase: caseAmericas,
      });
      arrayCase.push({
        regionName: "Europe",
        regionCase: caseEurope,
      });
      arrayCase.push({
        regionName: "South-East Asia",
        regionCase: caseSEAsia,
      });
      arrayCase.push({
        regionName: "Eastern Mediterranean",
        regionCase: caseEasternMediterranean,
      });
      arrayCase.push({
        regionName: "Western Pacific",
        regionCase: caseWesternPacific,
      });
      arrayCase.push({
        regionName: "Africa",
        regionCase: caseAfrica,
      });
      return res.json({
        status: true,
        msg: "Lấy dữ liệu thành công",
        data: arrayCase,
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
