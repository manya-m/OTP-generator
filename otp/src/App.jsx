import "./App.css";
import { useState } from "react";
import { Otp } from "./components/Otp";

function App() {
  const [boxCount, setBoxCount] = useState(""); // Box count state
  const [showOtp, setShowOtp] = useState(false); // State to toggle OTP rendering

  const handleBoxCountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only numeric input
      setBoxCount(value ? parseInt(value, 10) : ""); // Update box count or reset if empty
    }
  };

  const handleProceed = () => {
    if (boxCount > 0) {
      setShowOtp(true); // Show OTP input boxes
    } else {
      alert("Please enter a valid number greater than 0.");
    }
  };

  return (
    <div className="h-screen bg-white dark:bg-blue-700 text-black dark:text-white flex items-center justify-center">
      {!showOtp ? (
        <div className="flex flex-col items-center">
          <label htmlFor="boxCount" className="mb-2 text-lg font-semibold">
            Enter Number of OTP Boxes:
          </label>
          <input
            id="boxCount"
            type="number"
            value={boxCount}
            onChange={handleBoxCountChange}
            className="border rounded px-4 py-2 text-white bg-blue-700"
            placeholder="Number of Boxes"
            min="1"
          />
          <button
            onClick={handleProceed}
            className="mt-4 bg-blue-200 text-white px-6 py-2 rounded hover:bg-green-400"
          >
            Proceed
          </button>
        </div>
      ) : (
        <Otp number={boxCount} />
      )}
    </div>
  );
}

export default App;
