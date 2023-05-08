const express = require("express");
const router = express.Router();
const user = require("../../models/User");
const pharmacy = require("../../models/Pharmacy");

router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.post("/addpharmacy", require("./addpharmacy"));
router.put("/updateUser/:id", require("./updateUser"));

router.get("/:id", require("./getOwnProfile"));
router.get("/addresspharmacy", require("./addresspharmacy"));
//router.get("/Pharmacies/:userId", require("./PharmaciesList"));


module.exports = router;