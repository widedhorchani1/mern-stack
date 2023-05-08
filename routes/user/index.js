const express = require("express");
const router = express.Router();
const user = require("../../models/user");
const pharmacy = require("../../models/pharmacy");

router.post("/register", require("./register"));
router.post("/login", require("./login"));
router.post("/addpharmacy", require("./addpharmacy"));
router.put("/updateUser/:id", require("./updateUser"));

router.get("/:id", require("./getOwnProfile"));
router.get("/addresspharmacy", require("./addresspharmacy"));
//router.get("/Pharmacies/:userId", require("./PharmaciesList"));


module.exports = router;