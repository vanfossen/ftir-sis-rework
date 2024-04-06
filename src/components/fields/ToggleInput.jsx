import PropTypes from "prop-types";
import { useState } from "react";

const ToggleInput = ({ label, leftOption, rightOption }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="peer select-none items-center justify-center">
      <span className="text-gray-500">{label}</span>
      <div className="flex">
        <p>{leftOption}</p>
        <label className="peer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="peer sr-only"
          />
          <div className="peer relative mx-3 h-6 w-11 cursor-pointer rounded-full bg-blue-400 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-blue-500 after:transition-all after:content-[''] peer-checked:bg-pink-400 peer-checked:after:translate-x-full peer-checked:after:bg-pink-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-600" />
        </label>
        <p>{rightOption}</p>
      </div>
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
