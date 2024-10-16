const express = require("express");
const authMiddelware = require("../middelwares/authMiddelware");
const { bloodGroupDetailsController } = require("../controllers/analyticsController");

const router = express.Router();

//routes
router.get("/bloodGroups-data", authMiddelware, bloodGroupDetailsController);


module.exports = router;