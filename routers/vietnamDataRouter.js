const router = require("express").Router();
const vietnamDataController = require("../controllers/vietnamDataController");

router.get("/", vietnamDataController.getVNDataTotal);
router.get("/overview", vietnamDataController.getVNDataOverview);
router.get("/province", vietnamDataController.getVNProvinceData);
// router.get("/provinceForMap", vietnamDataController.getVNDataForMap);

module.exports = router;
