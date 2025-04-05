import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AddPatientForm from "./components/AddPatientForm";
import PatientList from "./pages/PatientList";
import CheckupForm from "./components/CheckupForm";
import PrescriptionForm from "./components/PrescriptionForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddPatientForm" element={<AddPatientForm />} />
        <Route path="/PatientList" element={<PatientList />} />
        <Route path="/checkup/add/:id" element={<CheckupForm />} />
        <Route path="/PrescriptionForm" element={<PrescriptionForm />} />
        </Routes>
    </Router>
  );
}

export default App;
