const express = require("express");
const router = express.Router();
const { createPrescription } = require("../controllers/prescription.controller");

router.post("/checkups/:id", createPrescription); 

module.exports = router;
