module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define("Patient", {
    //   patientId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     unique: true,
    //   },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Male", "Female", "Other"),
        allowNull: false,
      },
    //   dob: {
    //     type: DataTypes.DATEONLY,
    //     allowNull: false,
    //   },
      age:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bloodGroup: {
        type: DataTypes.STRING,
      },
      pastIllnesses: {
        type: DataTypes.TEXT,
      },
      allergies: {
        type: DataTypes.TEXT,
      },
      medications: {
        type: DataTypes.TEXT,
      },
      surgeries: {
        type: DataTypes.TEXT,
      },
      height: {
        type: DataTypes.FLOAT,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      bp: {
        type: DataTypes.STRING,
      },
      pulse: {
        type: DataTypes.INTEGER,
      },
      temperature: {
        type: DataTypes.FLOAT,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
      },
      emergencyContact: {
        type: DataTypes.STRING,
      },
    });
  
    return Patient;
  };
  