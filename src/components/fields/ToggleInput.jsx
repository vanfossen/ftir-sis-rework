import PropTypes from "prop-types";
import { useState } from "react";

const ToggleInput = ({ label, leftOption, rightOption }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col">
      <span className="underline">{label}</span>

      <label className="inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />

        {/* left text */}
        <span className="text-base">{leftOption}</span>

        {/* slider */}
        <span
          className={`group mx-3 flex w-16 rounded-full p-1 shadow-sm duration-200 ${
            isChecked
              ? "bg-pink-400 hover:bg-pink-500"
              : "bg-blue-400 hover:bg-blue-500"
          }`}
        >
          {/* slider background */}
          <span
            className={`h-6 w-6 rounded-full shadow-2xl duration-200 ${
              isChecked
                ? "translate-x-8 bg-pink-600 group-hover:bg-pink-700"
                : "bg-blue-600 group-hover:bg-blue-700"
            }`}
          />
        </span>

        {/* right text */}
        <span className="text-base">{rightOption}</span>
      </label>
    </div>
  );
};

// PropTypes declaration
ToggleInput.propTypes = {
  label: PropTypes.string,
  leftOption: PropTypes.string,
  rightOption: PropTypes.string,
};

export default ToggleInput;
