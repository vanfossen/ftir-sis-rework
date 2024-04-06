import PropTypes from "prop-types";
import { useState } from "react";

function SingleSliderInput({ label, min, max }) {
  const [sliderValue, setSliderValue] = useState(500);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    if (value < 0) {
      value = min;
    } else if (value > max) {
      value = max;
    }
    setSliderValue(value);
  };

  return (
    <div className="m-3 flex flex-col">
      <label className="text-gray-500">{label}</label>
      <div className="inline-flex items-center justify-center outline-none">
        <input
          tabIndex={-1}
          type="range"
          className="cursor-pointer"
          min={min}
          max={max}
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <input
          className="ms-2 w-12 rounded border text-center shadow-sm focus:border-blue-600 focus:outline-none focus:ring-0"
          min={min}
          max={max}
          value={sliderValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

// PropTypes declaration
SingleSliderInput.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default SingleSliderInput;
