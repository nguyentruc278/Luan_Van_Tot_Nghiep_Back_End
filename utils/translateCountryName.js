const { trimAllSpace } = require("./trimAllSpace");

exports.getTranslate = (country, toLang) => {
  let result;
  const standardName = trimAllSpace(country).toLowerCase();
  this.translate.forEach((item) => {
    if (standardName === trimAllSpace(item.whoname).toLowerCase()) {
      switch (toLang) {
        case "whoname":
          result = item.whoname;
          break;
        case "standard":
          result = item.standard;
          break;
        case "vietnamese":
          result = item.vietnamese;
          break;
        case "iso":
          result = item.iso;
          break;
        default:
          result = null;
          break;
      }
    }
  });
  return result;
};

exports.translate = [
  {
    whoname: "United States of America",
    standard: "United States of America",
    vietnamese: "Mỹ",
    iso: "USA",
  },
  {
    whoname: "Antarctica",
    standard: "Antarctica",
    vietnamese: "Nam Cực",
    iso: "ATA",
  },
  {
    whoname: "Viet Nam",
    standard: "Vietnam",
    vietnamese: "Việt Nam",
    iso: "VNM",
  },
  {
    whoname: "Democratic People's Republic of Korea",
    standard: "North Korea",
    vietnamese: "Triều Tiên",
    iso: "PRK",
  },
  {
    whoname: "India",
    standard: "India",
    vietnamese: "Ấn Độ",
    iso: "IND",
  },
  {
    whoname: "Brazil",
    standard: "Brazil",
    vietnamese: "Brazil",
    iso: "BRA",
  },
  {
    whoname: "The United Kingdom",
    standard: "United Kingdom",
    vietnamese: "Anh",
    iso: "GBR",
  },
  {
    whoname: "Russian Federation",
    standard: "Russia",
    vietnamese: "Nga",
    iso: "RUS",
  },
  {
    whoname: "China",
    standard: "China",
    vietnamese: "Trung Quốc",
    iso: "CHN",
  },
  {
    whoname: "Turkey",
    standard: "Turkey",
    vietnamese: "Thổ Nhĩ Kỳ",
    iso: "TUR",
  },
  {
    whoname: "France",
    standard: "France",
    vietnamese: "Pháp",
    iso: "FRA",
  },
  {
    whoname: "Iran (Islamic Republic of)",
    standard: "Iran",
    vietnamese: "Iran",
    iso: "IRN",
  },
  {
    whoname: "Argentina",
    standard: "Argentina",
    vietnamese: "Argentina",
    iso: "ARG",
  },
  {
    whoname: "Spain",
    standard: "Spain",
    vietnamese: "Tây Ban Nha",
    iso: "ESP",
  },
  {
    whoname: "Colombia",
    standard: "Colombia",
    vietnamese: "Colombia",
    iso: "COL",
  },
  {
    whoname: "Italy",
    standard: "Italy",
    vietnamese: "Ý",
    iso: "ITA",
  },
  {
    whoname: "Germany",
    standard: "Germany",
    vietnamese: "Đức",
    iso: "DEU",
  },
  {
    whoname: "Indonesia",
    standard: "Indonesia",
    vietnamese: "Indonesia",
    iso: "IDN",
  },
  {
    whoname: "Mexico",
    standard: "Mexico",
    vietnamese: "Mexico",
    iso: "MEX",
  },
  {
    whoname: "Poland",
    standard: "Poland",
    vietnamese: "Ba Lan",
    iso: "POL",
  },
  {
    whoname: "South Africa",
    standard: "South Africa",
    vietnamese: "Nam Phi",
    iso: "ZAF",
  },
  {
    whoname: "Philippines",
    standard: "Philippines",
    vietnamese: "Philippines",
    iso: "PHL",
  },
  {
    whoname: "Ukraine",
    standard: "Ukraine",
    vietnamese: "Ukraine",
    iso: "UKR",
  },
  {
    whoname: "Malaysia",
    standard: "Malaysia",
    vietnamese: "Malaysia",
    iso: "MYS",
  },
  {
    whoname: "Peru",
    standard: "Peru",
    vietnamese: "Peru",
    iso: "PER",
  },
  {
    whoname: "Netherlands",
    standard: "Netherlands",
    vietnamese: "Hà Lan",
    iso: "NLD",
  },
  {
    whoname: "Iraq",
    standard: "Iraq",
    vietnamese: "Iraq",
    iso: "IRQ",
  },
  {
    whoname: "Thailand",
    standard: "Thailand",
    vietnamese: "Thái Lan",
    iso: "THA",
  },
  {
    whoname: "Japan",
    standard: "Japan",
    vietnamese: "Nhật Bản",
    iso: "JPN",
  },
  {
    whoname: "Czechia",
    standard: "Czechia",
    vietnamese: "Czechia",
    iso: "CZE",
  },
  {
    whoname: "Canada",
    standard: "Canada",
    vietnamese: "Canada",
    iso: "CAN",
  },
  {
    whoname: "Chile",
    standard: "Chile",
    vietnamese: "Chile",
    iso: "CHL",
  },
  {
    whoname: "Bangladesh",
    standard: "Bangladesh",
    vietnamese: "Bangladesh",
    iso: "BGD",
  },
  {
    whoname: "Romania",
    standard: "Romania",
    vietnamese: "Romania",
    iso: "ROU",
  },
  {
    whoname: "Israel",
    standard: "Israel",
    vietnamese: "Israel",
    iso: "ISR",
  },
  {
    whoname: "Belgium",
    standard: "Belgium",
    vietnamese: "Bỉ",
    iso: "BEL",
  },
  {
    whoname: "Pakistan",
    standard: "Pakistan",
    vietnamese: "Pakistan",
    iso: "PAK",
  },
  {
    whoname: "Sweden",
    standard: "Sweden",
    vietnamese: "Thuỵ Điển",
    iso: "SWE",
  },
  {
    whoname: "Portugal",
    standard: "Portugal",
    vietnamese: "Bồ Đào Nha",
    iso: "PRT",
  },
  {
    whoname: "Serbia",
    standard: "Serbia",
    vietnamese: "Serbia",
    iso: "SRB",
  },
  {
    whoname: "Kazakhstan",
    standard: "Kazakhstan",
    vietnamese: "Kazakhstan",
    iso: "KAZ",
  },
  {
    whoname: "Morocco",
    standard: "Morocco",
    vietnamese: "Morocco",
    iso: "MAR",
  },
  {
    whoname: "Cuba",
    standard: "Cuba",
    vietnamese: "Cuba",
    iso: "CUB",
  },
  {
    whoname: "Switzerland",
    standard: "Switzerland",
    vietnamese: "Thuỵ Sĩ",
    iso: "CHE",
  },
  {
    whoname: "Jordan",
    standard: "Jordan",
    vietnamese: "Jordan",
    iso: "JOR",
  },
  {
    whoname: "Hungary",
    standard: "Hungary",
    vietnamese: "Hungary",
    iso: "HUN",
  },
  {
    whoname: "Nepal",
    standard: "Nepal",
    vietnamese: "Nepal",
    iso: "NPL",
  },
  {
    whoname: "Austria",
    standard: "Austria",
    vietnamese: "Áo",
    iso: "AUT",
  },
  {
    whoname: "United Arab Emirates",
    standard: "United Arab Emirates",
    vietnamese: "Các Tiểu Vương Quốc Ả Rập Thống Nhất",
    iso: "ARE",
  },
  {
    whoname: "Tunisia",
    standard: "Tunisia",
    vietnamese: "Tunisia",
    iso: "TUN",
  },
  {
    whoname: "Greece",
    standard: "Greece",
    vietnamese: "Hy Lạp",
    iso: "GRC",
  },
  {
    whoname: "Georgia",
    standard: "Georgia",
    vietnamese: "Georgia",
    iso: "GEO",
  },
  {
    whoname: "Lebanon",
    standard: "Lebanon",
    vietnamese: "Li Băng",
    iso: "LBN",
  },
  {
    whoname: "Guatemala",
    standard: "Guatemala",
    vietnamese: "Guatemala",
    iso: "GTM",
  },
  {
    whoname: "Belarus",
    standard: "Belarus",
    vietnamese: "Belarus",
    iso: "BLR",
  },
  {
    whoname: "Costa Rica",
    standard: "Costa Rica",
    vietnamese: "Costa Rica",
    iso: "CRI",
  },
  {
    whoname: "Saudi Arabia",
    standard: "Saudi Arabia",
    vietnamese: "Vương Quốc Ả Rập Saudi",
    iso: "SAU",
  },
  {
    whoname: "Bulgaria",
    standard: "Bulgaria",
    vietnamese: "Bungari",
    iso: "BGR",
  },
  {
    whoname: "Sri Lanka",
    standard: "Sri Lanka",
    vietnamese: "Sri Lanka",
    iso: "LKA",
  },
  {
    whoname: "Ecuador",
    standard: "Ecuador",
    vietnamese: "Ecuador",
    iso: "ECU",
  },
  {
    whoname: "Bolivia (Plurinational State of)",
    standard: "Bolivia",
    vietnamese: "Bolivia",
    iso: "BOL",
  },
  {
    whoname: "Azerbaijan",
    standard: "Azerbaijan",
    vietnamese: "Azerbaijan",
    iso: "AZE",
  },
  {
    whoname: "Myanmar",
    standard: "Myanmar",
    vietnamese: "Myanmar",
    iso: "MMR",
  },
  {
    whoname: "Panama",
    standard: "Panama",
    vietnamese: "Panama",
    iso: "PAN",
  },
  {
    whoname: "Paraguay",
    standard: "Paraguay",
    vietnamese: "Paraguay",
    iso: "PRY",
  },
  {
    whoname: "occupied Palestinian territory, including east Jerusalem",
    standard: "Palestine",
    vietnamese: "Palestine",
    iso: "PSE",
  },
  {
    whoname: "Slovakia",
    standard: "Slovakia",
    vietnamese: "Slovakia",
    iso: "SVK",
  },
  {
    whoname: "Croatia",
    standard: "Croatia",
    vietnamese: "Croatia",
    iso: "HRV",
  },
  {
    whoname: "Kuwait",
    standard: "Kuwait",
    vietnamese: "Kuwait",
    iso: "KWT",
  },
  {
    whoname: "Ireland",
    standard: "Ireland",
    vietnamese: "Ireland",
    iso: "IRL",
  },
  {
    whoname: "Uruguay",
    standard: "Uruguay",
    vietnamese: "Uruguay",
    iso: "URY",
  },
  {
    whoname: "Venezuela (Bolivarian Republic of)",
    standard: "Venezuela",
    vietnamese: "Venezuela",
    iso: "VEN",
  },
  {
    whoname: "Honduras",
    standard: "Honduras",
    vietnamese: "Honduras",
    iso: "HND",
  },
  {
    whoname: "Dominican Republic",
    standard: "Dominican Rep.",
    vietnamese: "Cộng Hoà Dominican",
    iso: "DOM",
  },
  {
    whoname: "Denmark",
    standard: "Denmark",
    vietnamese: "Đan Mạch",
    iso: "DNK",
  },
  {
    whoname: "Lithuania",
    standard: "Lithuania",
    vietnamese: "Lithuania",
    iso: "LTU",
  },
  {
    whoname: "Ethiopia",
    standard: "Ethiopia",
    vietnamese: "Ethiopia",
    iso: "ETH",
  },
  {
    whoname: "Libya",
    standard: "Libya",
    vietnamese: "Libya",
    iso: "LBY",
  },
  {
    whoname: "Republic of Korea",
    standard: "South Korea",
    vietnamese: "Hàn Quốc",
    iso: "KOR",
  },
  {
    whoname: "Mongolia",
    standard: "Mongolia",
    vietnamese: "Mongolia",
    iso: "MNG",
  },
  {
    whoname: "Egypt",
    standard: "Egypt",
    vietnamese: "Ai Cập",
    iso: "EGY",
  },
  {
    whoname: "Republic of Moldova",
    standard: "Moldova",
    vietnamese: "Moldova",
    iso: "MDA",
  },
  {
    whoname: "Slovenia",
    standard: "Slovenia",
    vietnamese: "Slovenia",
    iso: "SVN",
  },
  {
    whoname: "Oman",
    standard: "Oman",
    vietnamese: "Oman",
    iso: "OMN",
  },
  {
    whoname: "Armenia",
    standard: "Armenia",
    vietnamese: "Armenia",
    iso: "ARM",
  },
  {
    whoname: "Bahrain",
    standard: "Bahrain",
    vietnamese: "Bahrain",
    iso: "BHR",
  },
  {
    whoname: "Kenya",
    standard: "Kenya",
    vietnamese: "Kenya",
    iso: "KEN",
  },
  {
    whoname: "Bosnia and Herzegovina",
    standard: "Bosnia and Herz.",
    vietnamese: "Bosnia và Herzegovina",
    iso: "BIH",
  },
  {
    whoname: "Qatar",
    standard: "Qatar",
    vietnamese: "Qatar",
    iso: "QAT",
  },
  {
    whoname: "Zambia",
    standard: "Zambia",
    vietnamese: "Zambia",
    iso: "ZMB",
  },
  {
    whoname: "Nigeria",
    standard: "Nigeria",
    vietnamese: "Nigeria",
    iso: "NGA",
  },
  {
    whoname: "Algeria",
    standard: "Algeria",
    vietnamese: "Algeria",
    iso: "DZA",
  },
  {
    whoname: "North Macedonia",
    standard: "Macedonia",
    vietnamese: "Bắc Macedonia",
    iso: "MKD",
  },
  {
    whoname: "Norway",
    standard: "Norway",
    vietnamese: "Na Uy",
    iso: "NOR",
  },
  {
    whoname: "Puerto Rico",
    standard: "Puerto Rico",
    vietnamese: "Puerto Rico",
    iso: "PRI",
  },
  {
    whoname: "Botswana",
    standard: "Botswana",
    vietnamese: "Botswana",
    iso: "BWA",
  },
  {
    whoname: "Latvia",
    standard: "Latvia",
    vietnamese: "Latvia",
    iso: "LVA",
  },
  {
    whoname: "Uzbekistan",
    standard: "Uzbekistan",
    vietnamese: "Uzbekistan",
    iso: "UZB",
  },
  {
    whoname: "Kyrgyzstan",
    standard: "Kyrgyzstan",
    vietnamese: "Kyrgyzstan",
    iso: "KGZ",
  },
  {
    whoname: "Albania",
    standard: "Albania",
    vietnamese: "Albania",
    iso: "ALB",
  },
  {
    whoname: "Estonia",
    standard: "Estonia",
    vietnamese: "Estonia",
    iso: "EST",
  },
  {
    whoname: "Kosovo[1]",
    standard: "Kosovo",
    vietnamese: "Kosovo",
    iso: "-99",
  },
  {
    whoname: "Afghanistan",
    standard: "Afghanistan",
    vietnamese: "Afghanistan",
    iso: "AFG",
  },
  {
    whoname: "Mozambique",
    standard: "Mozambique",
    vietnamese: "Mozambique",
    iso: "MOZ",
  },
  {
    whoname: "Finland",
    standard: "Finland",
    vietnamese: "Phần Lan",
    iso: "FIN",
  },
  {
    whoname: "Singapore",
    standard: "Singapore",
    vietnamese: "Singapore",
    iso: "SGP",
  },
  {
    whoname: "Montenegro",
    standard: "Montenegro",
    vietnamese: "Montenegro",
    iso: "MNE",
  },
  {
    whoname: "Australia",
    standard: "Australia",
    vietnamese: "Úc",
    iso: "AUS",
  },
  {
    whoname: "Zimbabwe",
    standard: "Zimbabwe",
    vietnamese: "Zimbabwe",
    iso: "ZWE",
  },
  {
    whoname: "Ghana",
    standard: "Ghana",
    vietnamese: "Ghana",
    iso: "GHA",
  },
  {
    whoname: "Namibia",
    standard: "Namibia",
    vietnamese: "Namibia",
    iso: "NAM",
  },
  {
    whoname: "Uganda",
    standard: "Uganda",
    vietnamese: "Uganda",
    iso: "UGA",
  },
  {
    whoname: "Cyprus",
    standard: "Cyprus",
    vietnamese: "Síp",
    iso: "CYP",
  },
  {
    whoname: "Cambodia",
    standard: "Cambodia",
    vietnamese: "Campuchia",
    iso: "KHM",
  },
  {
    whoname: "El Salvador",
    standard: "El Salvador",
    vietnamese: "El Salvador",
    iso: "SLV",
  },
  {
    whoname: "Rwanda",
    standard: "Rwanda",
    vietnamese: "Rwanda",
    iso: "RWA",
  },
  {
    whoname: "Cameroon",
    standard: "Cameroon",
    vietnamese: "Cameroon",
    iso: "CMR",
  },
  {
    whoname: "Jamaica",
    standard: "Jamaica",
    vietnamese: "Jamaica",
    iso: "JAM",
  },
  {
    whoname: "Maldives",
    standard: "Maldives",
    vietnamese: "Maldives",
    iso: "MDV",
  },
  {
    whoname: "Luxembourg",
    standard: "Luxembourg",
    vietnamese: "Luxembourg",
    iso: "LUX",
  },
  {
    whoname: "Senegal",
    standard: "Senegal",
    vietnamese: "Senegal",
    iso: "SEN",
  },
  {
    whoname: "Angola",
    standard: "Angola",
    vietnamese: "Angola",
    iso: "AGO",
  },
  {
    whoname: "Malawi",
    standard: "Malawi",
    vietnamese: "Malawi",
    iso: "MWI",
  },
  {
    whoname: "Côte d’Ivoire",
    standard: "Côte d'Ivoire",
    vietnamese: "Bờ Biển Ngà",
    iso: "CIV",
  },
  {
    whoname: "Democratic Republic of the Congo",
    standard: "Dem. Rep. Congo",
    vietnamese: "Cộng Hoà Dân Chủ Congo",
    iso: "COD",
  },
  {
    whoname: "Réunion",
    standard: "",
    vietnamese: "Réunion",
  },
  {
    whoname: "Guadeloupe",
    standard: "",
    vietnamese: "Guadeloupe",
    iso: "GLP",
  },
  {
    whoname: "Trinidad and Tobago",
    standard: "Trinidad and Tobago",
    vietnamese: "Trinidad và Tobago",
    iso: "TTO",
  },
  {
    whoname: "Fiji",
    standard: "Fiji",
    vietnamese: "Fiji",
    iso: "FJI",
  },
  {
    whoname: "Eswatini",
    standard: "",
    vietnamese: "Eswatini",
    iso: "SWZ",
  },
  {
    whoname: "Suriname",
    standard: "Suriname",
    vietnamese: "Suriname",
    iso: "SUR",
  },
  {
    whoname: "French Polynesia",
    standard: "Fr. Polynesia",
    vietnamese: "Polynesia",
    iso: "PYF",
  },
  {
    whoname: "Madagascar",
    standard: "Madagascar",
    vietnamese: "Madagascar",
    iso: "MDG",
  },
  {
    whoname: "French Guiana",
    standard: "",
    vietnamese: "French Guiana",
    iso: "GUF",
  },
  {
    whoname: "Martinique",
    standard: "",
    vietnamese: "Martinique",
    iso: "MTQ",
  },
  {
    whoname: "Sudan",
    standard: "Sudan",
    vietnamese: "Sudan",
    iso: "SDN",
  },
  {
    whoname: "Cabo Verde",
    standard: "Cabo Verde",
    vietnamese: "Cabo Verde",
    iso: "CPV",
  },
  {
    whoname: "Syrian Arab Republic",
    standard: "Syria",
    vietnamese: "Cộng Hoà Ả Rập Syria",
    iso: "SYR",
  },
  {
    whoname: "Malta",
    standard: "Malta",
    vietnamese: "Malta",
    iso: "MLT",
  },
  {
    whoname: "Mauritania",
    standard: "Mauritania",
    vietnamese: "Mauritania",
    iso: "MRT",
  },
  {
    whoname: "Guyana",
    standard: "Guyana",
    vietnamese: "Guyana",
    iso: "GUY",
  },
  {
    whoname: "Gabon",
    standard: "Gabon",
    vietnamese: "Gabon",
    iso: "GAB",
  },
  {
    whoname: "Lao People's Democratic Republic",
    standard: "Laos",
    vietnamese: "Lào",
    iso: "LAO",
  },
  {
    whoname: "Guinea",
    standard: "Guinea",
    vietnamese: "Guinea",
    iso: "GIN",
  },
  {
    whoname: "United Republic of Tanzania",
    standard: "Tanzania",
    vietnamese: "Tanzania",
    iso: "TZA",
  },
  {
    whoname: "Togo",
    standard: "Togo",
    vietnamese: "Togo",
    iso: "TGO",
  },
  {
    whoname: "Benin",
    standard: "Benin",
    vietnamese: "Benin",
    iso: "BEN",
  },
  {
    whoname: "Papua New Guinea",
    standard: "Papua New Guinea",
    vietnamese: "Papua New Guinea",
    iso: "PNG",
  },
  {
    whoname: "Belize",
    standard: "Belize",
    vietnamese: "Belize",
    iso: "BLZ",
  },
  {
    whoname: "Haiti",
    standard: "Haiti",
    vietnamese: "Haiti",
    iso: "HTI",
  },
  {
    whoname: "Seychelles",
    standard: "Seychelles",
    vietnamese: "Seychelles",
    iso: "SYC",
  },
  {
    whoname: "Bahamas",
    standard: "Bahamas",
    vietnamese: "Bahamas",
    iso: "BHS",
  },
  {
    whoname: "Lesotho",
    standard: "Lesotho",
    vietnamese: "Lesotho",
    iso: "LSO",
  },
  {
    whoname: "Somalia",
    standard: "Somalia",
    vietnamese: "Somalia",
    iso: "SOM",
  },
  {
    whoname: "",
    standard: "Somaliand",
    vietnamese: "Somaliand",
    iso: "-99",
  },
  {
    whoname: "Mayotte",
    standard: "Mayotte",
    vietnamese: "Mayotte",
  },
  {
    whoname: "Timor-Leste",
    standard: "Timor-Leste",
    vietnamese: "Đông Timor",
    iso: "TLS",
  },
  {
    whoname: "Burundi",
    standard: "Burundi",
    vietnamese: "Burundi",
    iso: "BDI",
  },
  {
    whoname: "Tajikistan",
    standard: "Tajikistan",
    vietnamese: "Tajikistan",
    iso: "TJK",
  },
  {
    whoname: "Curaçao",
    standard: "Curaçao",
    vietnamese: "Curaçao",
    iso: "CUW",
  },
  {
    whoname: "Mauritius",
    standard: "Mauritius",
    vietnamese: "Mauritius",
    iso: "MUS",
  },
  {
    whoname: "Aruba",
    standard: "Aruba",
    vietnamese: "Aruba",
    iso: "ABW",
  },
  {
    whoname: "Mali",
    standard: "Mali",
    vietnamese: "Mali",
    iso: "MLI",
  },
  {
    whoname: "Congo",
    standard: "Congo",
    vietnamese: "Congo",
    iso: "COG",
  },
  {
    whoname: "Andorra",
    standard: "Andorra",
    vietnamese: "Andorra",
    iso: "AND",
  },
  {
    whoname: "Burkina Faso",
    standard: "Burkina Faso",
    vietnamese: "Burkina Faso",
    iso: "BFA",
  },
  {
    whoname: "Guam",
    standard: "Guam",
    vietnamese: "Guam",
    iso: "GUM",
  },
  {
    whoname: "Equatorial Guinea",
    standard: "Eq. Guinea",
    vietnamese: "Guinea Xích Đạo",
    iso: "GNQ",
  },
  {
    whoname: "Iceland",
    standard: "Iceland",
    vietnamese: "Iceland",
    iso: "ISL",
  },
  {
    whoname: "South Sudan",
    standard: "S. Sudan",
    vietnamese: "Nam Sudan",
    iso: "SSD",
  },
  {
    whoname: "Nicaragua",
    standard: "Nicaragua",
    vietnamese: "Nicaragua",
    iso: "NIC",
  },
  {
    whoname: "Saint Lucia",
    standard: "Saint Lucia",
    vietnamese: "Saint Lucia",
    iso: "LCA",
  },
  {
    whoname: "Barbados",
    standard: "Barbados",
    vietnamese: "Barbados",
    iso: "BRB",
  },
  {
    whoname: "Central African Republic",
    standard: "Central African Rep.",
    vietnamese: "Cộng Hoà Trung Phi",
    iso: "CAF",
  },
  {
    whoname: "Jersey",
    standard: "Jersey",
    vietnamese: "Jersey",
    iso: "JEY",
  },
  {
    whoname: "Gambia",
    standard: "Gambia",
    vietnamese: "Gambia",
    iso: "GMB",
  },
  {
    whoname: "Brunei Darussalam",
    standard: "Brunei",
    vietnamese: "Brunei",
    iso: "BRN",
  },
  {
    whoname: "New Caledonia",
    standard: "New Caledonia",
    vietnamese: "New Caledonia",
    iso: "NCL",
  },
  {
    whoname: "Yemen",
    standard: "Yemen",
    vietnamese: "Yemen",
    iso: "YEM",
  },
  {
    whoname: "Isle of Man",
    standard: "Isle of Man",
    vietnamese: "Isle of Man",
    iso: "IMN",
  },
  {
    whoname: "United States Virgin Islands",
    standard: "U.S. Virgin Is.",
    vietnamese: "Quần Đảo Virgin Thuộc Hoa Kỳ",
    iso: "VIR",
  },
  {
    whoname: "Eritrea",
    standard: "Eritrea",
    vietnamese: "Eritrea",
    iso: "ERI",
  },
  {
    whoname: "Sierra Leone",
    standard: "Sierra Leone",
    vietnamese: "Sierra Leone",
    iso: "SLE",
  },
  {
    whoname: "Niger",
    standard: "Niger",
    vietnamese: "Niger",
    iso: "NER",
  },
  {
    whoname: "Guinea-Bissau",
    standard: "Guinea-Bissau",
    vietnamese: "Guinea-Bissau",
    iso: "GNB",
  },
  {
    whoname: "Liberia",
    standard: "Liberia",
    vietnamese: "Liberia",
    iso: "LBR",
  },
  {
    whoname: "Gibraltar",
    standard: "Gibraltar",
    vietnamese: "Gibraltar",
    iso: "GIB",
  },
  {
    whoname: "Grenada",
    standard: "Grenada",
    vietnamese: "Grenada",
    iso: "GRD",
  },
  {
    whoname: "Bermuda",
    standard: "Bermuda",
    vietnamese: "Bermuda",
    iso: "BMU",
  },
  {
    whoname: "San Marino",
    standard: "San Marino",
    vietnamese: "San Marino",
    iso: "SMR",
  },
  {
    whoname: "Chad",
    standard: "Chad",
    vietnamese: "Chad",
    iso: "TCD",
  },
  {
    whoname: "New Zealand",
    standard: "New Zealand",
    vietnamese: "New Zealand",
    iso: "NZL",
  },
  {
    whoname: "Sint Maarten",
    standard: "Sint Maarten",
    vietnamese: "Sint Maarten",
    iso: "SXM",
  },
  {
    whoname: "Comoros",
    standard: "Comoros",
    vietnamese: "Comoros",
    iso: "COM",
  },
  {
    whoname: "Dominica",
    standard: "Dominica",
    vietnamese: "Dominica",
    iso: "DMA",
  },
  {
    whoname: "Saint Vincent and the Grenadines",
    standard: "St. Vin. and Gren.",
    vietnamese: "Saint Vincent và the Grenadines",
    iso: "VCT",
  },
  {
    whoname: "Saint Martin",
    standard: "St-Martin",
    vietnamese: "Saint Martin",
    iso: "MAF",
  },
  {
    whoname: "Antigua and Barbuda",
    standard: "Antigua and Barb.",
    vietnamese: "Antigua và Barbuda",
    iso: "ATG",
  },
  {
    whoname: "Sao Tome and Principe",
    standard: "São Tomé and Principe",
    vietnamese: "Sao Tome và Principe",
    iso: "STP",
  },
  {
    whoname: "Liechtenstein",
    standard: "Liechtenstein",
    vietnamese: "Liechtenstein",
    iso: "LIE",
  },
  {
    whoname: "Monaco",
    standard: "Monaco",
    vietnamese: "Monaco",
    iso: "MCO",
  },
  {
    whoname: "Turks and Caicos Islands",
    standard: "Turks and Caicos Is.",
    vietnamese: "Quần Đảo Turks và Caicos",
    iso: "TCA",
  },
  {
    whoname: "British Virgin Islands",
    standard: "British Virgin Is.",
    vietnamese: "Quần Đảo Virgin Thuộc Anh",
    iso: "VGB",
  },
  {
    whoname: "Bhutan",
    standard: "Bhutan",
    vietnamese: "Bhutan",
    iso: "BTN",
  },
  {
    whoname: "Saint Kitts and Nevis",
    standard: "St. Kitts and Nevis",
    vietnamese: "Saint Kitts và Nevis",
    iso: "KNA",
  },
  {
    whoname: "Djibouti",
    standard: "Djibouti",
    vietnamese: "Djibouti",
    iso: "DJI",
  },
  {
    whoname: "Bonaire",
    standard: "",
    vietnamese: "Bonaire",
    iso: "XAA",
  },
  {
    whoname: "Guernsey",
    standard: "Guernsey",
    vietnamese: "Guernsey",
    iso: "GGY",
  },
  {
    whoname: "Saint Barthélemy",
    standard: "St-Barthélemy",
    vietnamese: "Saint Barthélemy",
    iso: "BLM",
  },
  {
    whoname: "Faroe Islands",
    standard: "Faeroe Is.",
    vietnamese: "Quần Đảo Faroe",
    iso: "FRO",
  },
  {
    whoname: "Cayman Islands",
    standard: "Cayman Is.",
    vietnamese: "Quần Đảo Cayman",
    iso: "CYM",
  },
  {
    whoname: "Other",
    standard: "Other",
    vietnamese: "Other",
  },
  {
    whoname: "Greenland",
    standard: "Greenland",
    vietnamese: "Greenland",
    iso: "GRL",
  },
  {
    whoname: "Anguilla",
    standard: "Anguilla",
    vietnamese: "Anguilla",
    iso: "AIA",
  },
  {
    whoname: "Wallis and Futuna",
    standard: "Wallis and Futuna Is.",
    vietnamese: "Quần Đảo Wallis và Futuna",
    iso: "WLF",
  },
  {
    whoname: "Northern Mariana Islands (Commonwealth of the)",
    standard: "N. Mariana Is.",
    vietnamese: "Quần Đảo Bắc Mariana",
    iso: "MNP",
  },
  {
    whoname: "Falkland Islands (Malvinas)",
    standard: "Falkland Is.",
    vietnamese: "Quần Đảo Falkland",
    iso: "FLK",
  },
  {
    whoname: "Montserrat",
    standard: "Montserrat",
    vietnamese: "Montserrat",
    iso: "MSR",
  },
  {
    whoname: "Saint Pierre and Miquelon",
    standard: "St. Pierre and Miquelon",
    vietnamese: "Saint Pierre và Miquelon",
    iso: "SPM",
  },
  {
    whoname: "Sint Eustatius",
    standard: "Sint Eustatius",
    vietnamese: "Sint Eustatius",
    iso: "XBA",
  },
  {
    whoname: "Solomon Islands",
    standard: "Solomon Is.",
    vietnamese: "Quần Đảo Solomon",
    iso: "SLB",
  },
  {
    whoname: "Holy See",
    standard: "Holy See",
    vietnamese: "Holy See",
  },
  {
    whoname: "Saba",
    standard: "Saba",
    vietnamese: "Saba",
    iso: "XCA",
  },
  {
    whoname: "Palau",
    standard: "Palau",
    vietnamese: "Palau",
    iso: "PLW",
  },
  {
    whoname: "Marshall Islands",
    standard: "Marshall Is.",
    vietnamese: "Quần Đảo Marshall",
    iso: "MHL",
  },
  {
    whoname: "American Samoa",
    standard: "American Samoa",
    vietnamese: "American Samoa",
    iso: "ASM",
  },
  {
    whoname: "Vanuatu",
    standard: "Vanuatu",
    vietnamese: "Vanuatu",
    iso: "VUT",
  },
  {
    whoname: "Samoa",
    standard: "Samoa",
    vietnamese: "Samoa",
    iso: "WSM",
  },
  {
    whoname: "Cook Islands",
    standard: "Cook Is.",
    vietnamese: "Quần Đảo Cook",
    iso: "COK",
  },
  {
    whoname: "Kiribati",
    standard: "Kiribati",
    vietnamese: "Kiribati",
    iso: "KIR",
  },
  {
    whoname: "Micronesia (Federated States of)",
    standard: "Micronesia",
    vietnamese: "Micronesia",
    iso: "FSM",
  },
  {
    whoname: "Nauru",
    standard: "Nauru",
    vietnamese: "Nauru",
    iso: "NRU",
  },
  {
    whoname: "Niue",
    standard: "Niue",
    vietnamese: "Niue",
    iso: "NIU",
  },
  {
    whoname: "Pitcairn Islands",
    standard: "Pitcairn Is.",
    vietnamese: "Quần Đảo Pitcairn",
    iso: "PCN",
  },
  {
    whoname: "Saint Helena",
    standard: "Saint Helena",
    vietnamese: "Saint Helena",
    iso: "SHN",
  },
  {
    whoname: "Tokelau",
    standard: "Tokelau",
    vietnamese: "Tokelau",
    iso: "TKL",
  },
  {
    whoname: "Tonga",
    standard: "Tonga",
    vietnamese: "Tonga",
    iso: "TON",
  },
  {
    whoname: "Turkmenistan",
    standard: "Turkmenistan",
    vietnamese: "Turkmenistan",
    iso: "TKM",
  },
  {
    whoname: "Tuvalu",
    standard: "Tuvalu",
    vietnamese: "Tuvalu",
    iso: "TUV",
  },
  {
    whoname: "China",
    standard: "Taiwan",
    vietnamese: "Trung Quốc",
    iso: "CHN",
  },
  {
    whoname: "China",
    standard: "Hong Kong",
    vietnamese: "Trung Quốc",
    iso: "CHN",
  },
];
