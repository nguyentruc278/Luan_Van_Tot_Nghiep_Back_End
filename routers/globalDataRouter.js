const router = require("express").Router();
const globalDataController = require("../controllers/globalDataController");

router.get("/", globalDataController.getAllData);
router.get("/chartCase", globalDataController.getDataCaseChart);
router.get("/lastDayData/:country", globalDataController.getTotalData);
router.get("/regionCase", globalDataController.getRegionCase);
router.get("/regionCaseTotal", globalDataController.getRegionCaseTotal);

module.exports = router;
