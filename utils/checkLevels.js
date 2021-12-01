exports.checkLevels = (caseTotal) => {
  let level;
  switch (true) {
    case caseTotal < 1:
      level = 0;
      break;
    case 1 <= caseTotal && caseTotal <= 5000:
      level = 1;
      break;
    case 5001 <= caseTotal && caseTotal <= 50000:
      level = 2;
      break;
    case 50001 <= caseTotal && caseTotal <= 500000:
      level = 3;
      break;
    case 500001 <= caseTotal && caseTotal <= 5000000:
      level = 4;
      break;
    case 5000000 < caseTotal:
      level = 5;
      break;
    default:
      break;
  }
  return level;
};
