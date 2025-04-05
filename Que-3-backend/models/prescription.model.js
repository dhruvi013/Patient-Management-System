module.exports = (sequelize, DataTypes) => {
    const Prescription = sequelize.define("Prescription", {
      medicines: {
        type: DataTypes.TEXT("long"), 
        allowNull: false,
      },
      days: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Prescription;
  };
  