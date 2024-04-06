import PropTypes from "prop-types";
import { useState } from "react";

const ToggleInput = ({ label, leftOption, rightOption }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="m-1 flex select-none">
      <span className="underline">{label}</span>
      <div className="flex">
        <span>{leftOption}</span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div className="peer relative mx-3 h-6 w-11 cursor-pointer rounded-full bg-blue-400 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-blue-500 after:transition-all after:content-[''] peer-checked:bg-pink-400 peer-checked:after:translate-x-full peer-checked:after:bg-pink-500 peer-focus:outline-none peer-focus:ring-blue-600"></div>
        <span>{rightOption}</span>
      </div>
    </label>
  );
};

// PropTypes declaration
ToggleInput.propTypes = {
  label: PropTypes.string,
  leftOption: PropTypes.string,
  rightOption: PropTypes.string,
};

export default ToggleInput;
