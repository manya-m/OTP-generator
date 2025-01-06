import { Button } from "./Buttons";
import { useRef, useState } from "react";

// OTP Component
export function Otp({ number }) {
  const ref = useRef([]); // Array to hold refs for each input box
  const [values, setValues] = useState(Array(number).fill("")); // Dynamic state based on number
  const [disabled, setDisabled] = useState(true);

  const handleChange = (index, value) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);

    // Check if all input fields are filled to enable the button
    setDisabled(updatedValues.some((val) => val === ""));

    // Focus the next input box
    if (value && index + 1 < number) {
      ref.current[index + 1].focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      ref.current[index - 1].focus();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          {values.map((_, index) => (
            <SubOtpBox
              key={index}
              reference={(el) => (ref.current[index] = el)}
              value={values[index]}
              onDone={(val) => handleChange(index, val)}
              goBack={() => handleBackspace(index)}
            />
          ))}
        </div>
        <br />
        <Button disabled={disabled}>Sign up</Button>
      </div>
    </div>
  );
}

// SubOtpBox Component
function SubOtpBox({ reference, value, onDone, goBack }) {
  return (
    <div>
      <input
        value={value}
        ref={reference}
        onKeyUp={(e) => {
          if (e.key === "Backspace" && value === "") {
            goBack();
          }
        }}
        onChange={(e) => {
          const val = e.target.value;
          if (/^[0-9]$/.test(val)) {
            onDone(val); // Accept only numeric values
          } else {
            onDone(""); // Clear invalid input
          }
        }}
        type="text"
        className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white"
        maxLength="1" // Limit input to a single character
      />
    </div>
  );
}
