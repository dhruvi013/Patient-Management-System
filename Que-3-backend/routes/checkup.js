const express = require("express");
const router = express.Router();

const db = require("../models");
const Checkup = db.Checkup;

router.post("/:id", async (req, res) => {
  try {
    console.log("Received checkup data:", req.body);
    console.log("Patient ID from URL:", req.params.id);

    const { bp, weight, height, complaints, remarks } = req.body;
    const patientId = req.params.id;

    if (!bp || !weight || !height || !complaints || !patientId) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    const newCheckup = await Checkup.create({
      patient_id: patientId,
      bp,
      weight,
      height,
      complaints,
      remarks,
    });

    res.status(201).json({ success: true, data: newCheckup });
  } catch (err) {
    console.error("Error in checkup creation:", err);
    res.status(500).json({ 
      success: false, 
      message: "Checkup creation failed.", 
      error: err.message,
      stack: err.stack,
    });
  }
});

module.exports = router;
