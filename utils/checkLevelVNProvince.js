exports.checkLevels = (cases) => {
  let level;
  switch (true) {
    case 1 <= cases && cases <= 100:
      level = 1;
      break;
    case 101 <= cases && cases <= 1000:
      level = 2;
      break;
    case 1001 <= cases && cases <= 10000:
      level = 3;
      break;
    case 10001 <= cases && cases <= 100000:
      level = 4;
      break;
    case 100000 < cases:
      level = 5;
      break;
    default:
      break;
  }
  return level;
};
