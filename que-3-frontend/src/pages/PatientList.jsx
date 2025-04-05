import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/PatientList.css";
const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPatients = async (name = "") => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/patients?name=${name}`
      );
      setPatients(res.data.data);
    } catch (err) {
      console.error("Failed to fetch patients", err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSearch = () => {
    fetchPatients(searchTerm);
  };

  return (
    <div className="container">
      <h2 className="title">Patient Records</h2>

      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by full name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="table-wrapper">
        <table className="patient-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Blood Group</th>
              <th>surgeries</th>
              <th>pastIllnesses</th>
              <th>medications</th>
              <th>height</th>
              <th>weight</th>
              <th>bp</th>
              <th>pulse</th>
              <th>temperature</th>
              <th>address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.length > 0 ? (
              patients.map((p) => (
                <tr key={p.id}>
                  <td>{p.fullName}</td>
                  <td>{p.gender}</td>
                  <td>{p.age}</td>
                  <td>{p.phone}</td>
                  <td>{p.email}</td>
                  <td>{p.bloodGroup}</td>
                  <td>{p.surgeries}</td>
                  <td>{p.pastIllnesses}</td>
                  <td>{p.medications}</td>
                  <td>{p.height}</td>
                  <td>{p.weight}</td>
                  <td>{p.bp}</td>
                  <td>{p.pulse}</td>
                  <td>{p.temperature}</td>
                  <td>{p.address}</td>

                  <td>
                    <Link className="checkup-link" to={`/checkup/add/${p.id}`}>
                      Add Checkup
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
