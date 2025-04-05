const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); 

// Sync Database
db.sequelize.sync().then(() => {
  console.log(" Database synced.");
});

const patientRoutes = require("./routes/patient.routes");

app.use("/api/patients", patientRoutes);

const checkupRoutes = require('./routes/checkup');
app.use('/api/checkups', checkupRoutes);

const prescriptionRoutes = require('./routes/prescription.routes');
app.use('/api/prescriptions', prescriptionRoutes);




// Start server if needed here
// app.listen(5000, () => console.log("Server is running on port 5000"));

module.exports = app;
