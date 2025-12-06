import { useState ,useEffect} from "react";
import api from "../api/apiConfig";

function Announcement() {
  const [message, setMessage] = useState("");
  const [parentNumbers, setParentNumbers] = useState([]);

  useEffect(() => {
    fetchPhoneNumbers();
  }, []);

  const fetchPhoneNumbers = async () => {
    const response = await api.get("/parents");
    console.log("response phonenumbers",response)
    const numbers = response.data.map((p) => p.phone);
    setParentNumbers(numbers);
  };
  const handleSend = async () => {
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }
    try {
      //const parents = ["6385457813", "6383577105"]; // load from DB

      await api.post("/announce", { parents: parentNumbers, message });
      setMessage("");
      alert("Message sent to parents!");
    } catch {}
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mt-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Send Announcement
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
        Send Via WhatsApp
      </button>
      {/* <div className="mt-4 text-gray-600 text-sm">
        <strong>Recipients:</strong>
        <p className="mt-1 text-gray-800">
          {parentPhone.length > 0
            ? parentPhone.join(", ")
            : "No parent numbers added yet."}
        </p>
      </div> */}
    </div>
  );
}

export default Announcement;
