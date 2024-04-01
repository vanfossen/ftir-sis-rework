import { X } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

function NewDialog({ isWelcome, toggleWelcome }) {
  const [isChecked, setChecked] = useState(
    localStorage.getItem("hideWelcomeDialog") === "true" ? true : false,
  );
  const handleChecked = (event) => {
    if (event.target.checked) {
      localStorage.setItem("hideWelcomeDialog", "true");
      setChecked(true);
    } else {
      localStorage.setItem("hideWelcomeDialog", "false");
      setChecked(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 py-32 ${
        isWelcome
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mx-auto max-h-full max-w-xl overflow-x-hidden rounded-xl bg-white">
        <div className="flex items-center justify-end border-b border-gray-200 p-3">
          <button onClick={toggleWelcome} className="rounded hover:bg-gray-300">
            <X />
          </button>
        </div>
        <div className="mx-5 flex flex-col items-center p-3 text-center">
          <h1 className="pb-3 text-4xl font-bold underline">
            Welcome to
            <span>
              <span> </span>
              <span className="text-red-500">F</span>
              <span className="text-orange-500">T</span>
              <span className="text-yellow-500">I</span>
              <span className="text-green-500">R</span>
              <span className="text-teal-500">-</span>
              <span className="text-blue-500">S</span>
              <span className="text-indigo-500">I</span>
              <span className="text-purple-500">S</span>
            </span>
            !
          </h1>
          <h2 className="p-1 text-xl underline">
            Fourier Transform InfraRed - Scientific Instrument Simulator
          </h2>
          <p className="p-3 text-lg">
            Please use the navigation bar above to explore the application!
          </p>
          <div className="text-md">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChecked}
              className="mx-3"
            />
            <label>Hide popup on reload/refresh?</label>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

// PropTypes declaration
NewDialog.propTypes = {
  isWelcome: PropTypes.bool,
  toggleWelcome: PropTypes.func,
};

export default NewDialog;
