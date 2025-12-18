import { useState ,useEffect} from "react";
import api from "../api/apiConfig";

function Announcement() {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }
    try {
      await api.post("/announce", { message });
      setMessage("");
      alert("Message sent to parents!");
    } catch(error) {
       alert("Failed to send announcement");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mt-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
         Announcement Board
      </h2>
      <textarea
        className="w-full h-36 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
        placeholder="Enter announcement"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        onClick={handleSend}
        className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 active:scale-95 transition-all mt-4"
      >
        Send Via Email
      </button>
    </div>
  );
}

export default Announcement;
