const { trimAllSpace } = require("./trimAllSpace");

exports.getKeyProvince = (province, toKey) => {
  let result;
  const provinceName = trimAllSpace(province).toLowerCase();
  this.getKey.forEach((item) => {
    if (provinceName === "bàrịa-vũngtàu") console.log("ok");
    if (provinceName === trimAllSpace(item.name).toLowerCase()) {
      switch (toKey) {
        case "name":
          result = item.name;
          break;
        case "key":
          result = item.key;
          break;
        default:
          break;
      }
    }
  });
  return result;
};

exports.getKey = [
  {
    name: "Hà Nội",
    key: "geo-26",
  },
  {
    name: "TP. Hồ Chí Minh",
    key: "geo-24",
  },
  {
    name: "Cà Mau",
    key: "geo-12",
  },
  {
    name: "Kiên Giang",
    key: "geo-32",
  },
  {
    name: "Bạc Liêu",
    key: "geo-1",
  },
  {
    name: "Sóc Trăng",
    key: "geo-50",
  },
  {
    name: "Trà Vinh",
    key: "geo-58",
  },
  {
    name: "An Giang",
    key: "geo-0",
  },
  {
    name: "Đồng Tháp",
    key: "geo-17",
  },
  {
    name: "Cần Thơ",
    key: "geo-11",
  },
  {
    name: "Hậu Giang",
    key: "geo-23",
  },
  {
    name: "Vĩnh Long",
    key: "geo-60",
  },
  {
    name: "Bến Tre",
    key: "geo-5",
  },
  {
    name: "Tiền Giang",
    key: "geo-57",
  },
  {
    name: "Long An",
    key: "geo-38",
  },
  {
    name: "Tây Ninh",
    key: "geo-52",
  },
  {
    name: "Bà Rịa – Vũng Tàu",
    key: "geo-6",
  },
  {
    name: "Đồng Nai",
    key: "geo-16",
  },
  {
    name: "Bình Dương",
    key: "geo-8",
  },
  {
    name: "Bình Phước",
    key: "geo-9",
  },
  {
    name: "Bình Thuận",
    key: "geo-10",
  },
  {
    name: "Đắk Nông",
    key: "geo-15",
  },
  {
    name: "Lâm Đồng",
    key: "geo-36",
  },
  {
    name: "Ninh Thuận",
    key: "geo-42",
  },
  {
    name: "Khánh Hòa",
    key: "geo-31",
  },
  {
    name: "Đắk Lắk",
    key: "geo-14",
  },
  {
    name: "Phú Yên",
    key: "geo-44",
  },
  {
    name: "Gia Lai",
    key: "geo-20",
  },
  {
    name: "Bình Định",
    key: "geo-7",
  },
  {
    name: "Kon Tum",
    key: "geo-33",
  },
  {
    name: "Quảng Ngãi",
    key: "geo-47",
  },
  {
    name: "Quảng Nam",
    key: "geo-46",
  },
  {
    name: "Đà Nẵng",
    key: "geo-18",
  },
  {
    name: "Thừa Thiên Huế",
    key: "geo-53",
  },
  {
    name: "Quảng Trị",
    key: "geo-49",
  },
  {
    name: "Quảng Bình",
    key: "geo-45",
  },
  {
    name: "Hà Tĩnh",
    key: "geo-28",
  },
  {
    name: "Nghệ An",
    key: "geo-40",
  },
  {
    name: "Thanh Hóa",
    key: "geo-56",
  },
  {
    name: "Nam Định",
    key: "geo-39",
  },
  {
    name: "Ninh Bình",
    key: "geo-41",
  },
  {
    name: "Thái Bình",
    key: "geo-54",
  },
  {
    name: "Hà Nam",
    key: "geo-27",
  },
  {
    name: "Hòa Bình",
    key: "geo-29",
  },
  {
    name: "Hải Phòng",
    key: "geo-22",
  },
  {
    name: "Hải Dương",
    key: "geo-21",
  },
  {
    name: "Hưng Yên",
    key: "geo-30",
  },
  {
    name: "Bắc Ninh",
    key: "geo-4",
  },
  {
    name: "Quảng Ninh",
    key: "geo-48",
  },
  {
    name: "Bắc Giang",
    key: "geo-2",
  },
  {
    name: "Lạng Sơn",
    key: "geo-34",
  },
  {
    name: "Cao Bằng",
    key: "geo-13",
  },
  {
    name: "Bắc Kạn",
    key: "geo-3",
  },
  {
    name: "Thái Nguyên",
    key: "geo-55",
  },
  {
    name: "Hà Giang",
    key: "geo-25",
  },
  {
    name: "Tuyên Quang",
    key: "geo-59",
  },
  {
    name: "Vĩnh Phúc",
    key: "geo-61",
  },
  {
    name: "Lào Cai",
    key: "geo-37",
  },
  {
    name: "Yên Bái",
    key: "geo-62",
  },
  {
    name: "Phú Thọ",
    key: "geo-43",
  },
  {
    name: "Lai Châu",
    key: "geo-35",
  },
  {
    name: "Điện Biên",
    key: "geo-19",
  },
  {
    name: "Sơn La",
    key: "geo-51",
  },
];
