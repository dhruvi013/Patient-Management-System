const patientService = require("../services/patient.service");

exports.addPatient = async (req, res) => {
  try {
    const newPatient = await patientService.createPatient(req.body);
    res.status(201).json({ message: "Patient added successfully", data: newPatient });
  } catch (error) {
    res.status(500).json({ message: "Error adding patient", error: error.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const name = req.query.name;
    const patients = await patientService.getPatients(name);
    res.status(200).json({ data: patients });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error: error.message });
  }
};
