import React, { useState } from "react";
import axios from "axios";
import "../css/AddPatientForm.css";

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    // patientId: "",
    fullName: "",
    gender: "",
    // dob: "",
    age: "",
    bloodGroup: "",
    pastIllnesses: "",
    allergies: "",
    medications: "",
    surgeries: "",
    height: "",
    weight: "",
    bp: "",
    pulse: "",
    temperature: "",
    phone: "",
    email: "",
    address: "",
    emergencyContact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/patients/add", formData);
      setMessage("Patient added successfully!");
      setFormData({
        // patientId: "",
        fullName: "",
        gender: "",
        // dob: "",
        age: "",
        bloodGroup: "",
        pastIllnesses: "",
        allergies: "",
        medications: "",
        surgeries: "",
        height: "",
        weight: "",
        bp: "",
        pulse: "",
        temperature: "",
        phone: "",
        email: "",
        address: "",
        emergencyContact: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("Failed to add patient.");
    }
  };

  return (
    <div className="form-container">
      <h2>Patient Registration</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        {/* <input name="patientId" placeholder="Patient ID" value={formData.patientId} onChange={handleChange} required /> */}
        <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {/* <input type="date" name="dob" value={formData.dob} onChange={handleChange} required /> */}
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} />
        <textarea name="pastIllnesses" placeholder="Past Illnesses" value={formData.pastIllnesses} onChange={handleChange} />
        <textarea name="allergies" placeholder="Allergies" value={formData.allergies} onChange={handleChange} />
        <textarea name="medications" placeholder="Medications" value={formData.medications} onChange={handleChange} />
        <textarea name="surgeries" placeholder="Surgeries" value={formData.surgeries} onChange={handleChange} />
        <input type="number" step="0.01" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} />
        <input type="number" step="0.01" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} />
        <input name="bp" placeholder="Blood Pressure" value={formData.bp} onChange={handleChange} />
        <input type="number" name="pulse" placeholder="Pulse" value={formData.pulse} onChange={handleChange} />
        <input type="number" step="0.1" name="temperature" placeholder="Temperature (°C)" value={formData.temperature} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input name="emergencyContact" placeholder="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
