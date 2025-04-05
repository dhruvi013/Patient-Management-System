module.exports = (sequelize, DataTypes) => {
  const Checkup = sequelize.define("Checkup", {
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complaints: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    remarks: {
      type: DataTypes.TEXT,
    },
  });

  Checkup.associate = (models) => {
    Checkup.belongsTo(models.Patient, {
      foreignKey: "patient_id",
      onDelete: "CASCADE",
    });
  };

  return Checkup;
};
