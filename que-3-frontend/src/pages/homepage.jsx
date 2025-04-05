import { Link } from "react-router-dom";
import "../css/homepage.css"; // Make sure this path is correct

const HomePage = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Patient Management Dashboard</h1>
      <div className="dashboard-links">
        <Link to="/AddPatientForm" className="dashboard-link">
          New Patient
        </Link>
        <Link to="/PatientList" className="dashboard-link">
          Search Patient and add checkup details
        </Link>
        <Link to="/PrescriptionForm" className="dashboard-link">
          Add Prescription
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
