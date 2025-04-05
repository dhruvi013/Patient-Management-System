import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../css/CheckupForm.css";

const PrescriptionForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    medicines: "",
    days: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/prescriptions/${id}`, formData);
      alert("Prescription submitted successfully!");
    } catch (error) {
      console.error("Failed to submit prescription", error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="checkup-container">
      <h2 className="form-title">Prescription</h2>
      <form className="checkup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Medicines</label>
          <input
            type="text"
            name="medicines"
            value={formData.medicines}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Num of days</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            step="1"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Prescription
        </button>
      </form>
    </div>
  );
};

export default PrescriptionForm;
