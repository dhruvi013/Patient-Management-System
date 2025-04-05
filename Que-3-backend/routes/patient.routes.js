const express = require("express");
const { validatePatient } = require("../helpers/validation");
const patientController = require("../controllers/patient.controller");

const router = express.Router();

router.post("/add", validatePatient, patientController.addPatient);

// Get all patients OR search by name
router.get("/", patientController.getAllPatients);

module.exports = router;
