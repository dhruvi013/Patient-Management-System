const { Prescription } = require("../models");

exports.createPrescription = async (req, res) => {
  const { medicines, days } = req.body;

  try {
    const prescription = await Prescription.create({ medicines, days });

    res.status(201).json({
      message: "Prescription added successfully",
      data: prescription,
    });
  } catch (error) {
    console.error("Error creating prescription:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};
