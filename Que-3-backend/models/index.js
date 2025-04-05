const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Patient = require("./patient.model.js")(sequelize, DataTypes);
const Checkup = require('./checkup.model.js')(sequelize, DataTypes);
db.Checkup = Checkup;
const prescription = require('./prescription.model.js')(sequelize, DataTypes);
db.Checkup = Checkup;

// Associations
db.Checkup.associate(db);
db.Patient.associate && db.Patient.associate(db);

module.exports = db;
