import React, { useState } from "react";
import axios from "axios";
import { useParams , useNavigate } from "react-router-dom";
import "../css/CheckupForm.css";

const CheckupForm = () => {
  const { id } = useParams(); // patient ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    bp: "",
    weight: "",
    height: "",
    complaints: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/checkups/${id}`, formData);
      alert("Checkup submitted successfully!");

      navigate(`/PrescriptionForm`);   
    } 

      catch (error) {
      console.error("Failed to submit checkup", error);
      alert("Submission failed.");
    }
  };

  return (
    <div className="checkup-container">
      <h2 className="form-title">Patient Checkup</h2>
      <form className="checkup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blood Pressure:</label>
          <input
            type="text"
            name="bp"
            value={formData.bp}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>

        <div className="form-group">
          <label>Common Complaints:</label>
          <textarea
            name="complaints"
            value={formData.complaints}
            onChange={handleChange}
            rows="3"
            placeholder="e.g. headache, cold, joint pain..."
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label>Doctor's Remarks:</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows="3"
            placeholder="e.g. monitor BP regularly..."
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Submit Checkup
        </button>
      </form>
    </div>
  );
};

export default CheckupForm;
