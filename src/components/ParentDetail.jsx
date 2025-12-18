import React, { useState } from "react";
import api from "../api/apiConfig";
import Announcement from "./Announcement";

function ParentDetail() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [studentName, setStudentName] = useState("");
 // const [parentPhone,setParentPhone]=useState([]);

  const handleSubmit = async () => {
    try {
      const sendParentDetail = await api.post("/addparents", {
        parentName,
        email,
        studentName,
      });
      console.log(sendParentDetail.data);
      //setParentPhone(sendParentDetail.data)
      alert("Parent Details added Successfully");
      //clear input fields
      setParentName("");
      setEmail("");
      setStudentName("");
    } catch (error) {
      console.error("Error posting data", error);
      alert("Failed to add parent");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mt-3">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Parent Details Form
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label>ParentName</label>
            <input
              type="text"
              placeholder="Enter ParentName"
              onChange={(e) => setParentName(e.target.value)}
              value={parentName}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter ParentEmail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label>StudentName</label>
            <input
              type="text"
              placeholder="Enter your studentName"
              onChange={(e) => setStudentName(e.target.value)}
              value={studentName}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition transform"
          >
            Submit
          </button>
        </div>
      </div>
     <Announcement/>
    </div>
  );
}

export default ParentDetail;
