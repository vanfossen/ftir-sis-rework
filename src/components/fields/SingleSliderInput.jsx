import PropTypes from "prop-types";
import { useState } from "react";

function SingleSliderInput({ label, min, max }) {
  const [sliderValue, setSliderValue] = useState(500);

  const handleChange = (event) => {
    setSliderValue(event.target.value);
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
          onChange={handleChange}
        />
        <input
          className="ms-2 w-16 rounded border text-center shadow-sm outline-none transition-all invalid:border-red-600 focus:border-blue-600 focus:outline-none focus:ring-0"
          type="number"
          step={1}
          min={min}
          max={max}
          required
          value={sliderValue}
          onChange={handleChange}
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
