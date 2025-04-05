const db = require("../models");
const { Op } = require("sequelize");
const Patient = db.Patient;

exports.createPatient = async (patientData) => {
  return await Patient.create(patientData);
};

exports.getPatients = async (name) => {
  if (name) {
    return await Patient.findAll({
      where: {
        fullName: {
          [Op.like]: `%${name}%`,
        },
      },
    });
  } else {
    return await Patient.findAll();
  }
};
