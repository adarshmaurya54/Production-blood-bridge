const express = require("express");
const authMiddelware = require("../middelwares/authMiddelware");
const { createInventoryController, getInventoryController, getDonorsController, getHospitalsController, getOrganisationsController, getOrganisationsForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY
router.post("/create-inventory", authMiddelware, createInventoryController)
router.get("/get-inventory", authMiddelware, getInventoryController);
router.get("/get-recent-inventory", authMiddelware, getRecentInventoryController );
router.get("/get-donors", authMiddelware, getDonorsController);
router.get("/get-hospitals", authMiddelware, getHospitalsController);
router.get("/get-organisations", authMiddelware, getOrganisationsController);
router.get("/get-organisations-for-hospital", authMiddelware, getOrganisationsForHospitalController);
// get hospital blood records
router.post("/get-inventory-hospital", authMiddelware, getInventoryHospitalController);


module.exports = router;