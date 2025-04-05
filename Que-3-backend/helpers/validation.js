const { body } = require("express-validator");

exports.validatePatient = [
  body("fullName").notEmpty().withMessage("Full Name is required"),
  body("gender").isIn(["Male", "Female", "Other"]).withMessage("Invalid gender"),
  body("dob").isDate().withMessage("Invalid date of birth"),
  body("email").isEmail().withMessage("Invalid email"),
  body("phone").notEmpty().withMessage("Phone number is required"),
];

