import React, { useState } from "react";
import axios from "axios";
import api from "../api/apiConfig";
import { useNavigate } from "react-router-dom";

function AdmissionForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    className: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    if (!token) {
      setMessage("Please Login Before submitting the Admission Form");
      setTimeout(() => navigate("/login"), 5000);
    }
    try {
      const response = await api.post("/admission/users",formData);
      setMessage(response.data.message);
      // Clear input fields
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        className: "",
      });
    } catch {
      setMessage("Submission Failed,Try Again");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-4xl">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764219774/admission_ovpjdp.jpg"
          alt="admission form"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-8 w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Admission Form
        </h1>
        {message && (
          <p className="text-green-600 text-center font-semibold mb-4">
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="studentName"
            placeholder="Student Name"
            onChange={handleChange}
            value={formData.studentName}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={formData.phone}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <input
            name="className"
            placeholder="Class Applying For"
            onChange={handleChange}
            value={formData.className}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <br />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdmissionForm;
