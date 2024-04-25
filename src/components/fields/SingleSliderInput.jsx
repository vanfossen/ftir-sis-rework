import Input from "@mui/joy/Input";
import Slider from "@mui/joy/Slider";
import PropTypes from "prop-types";
import { useState } from "react";

function SingleSliderInput({ label, min, max }) {
  const [scan, setScan] = useState(500);

  const handleSliderChange = (event, newValue) => {
    setScan(newValue);
  };

  const handleInputChange = (event) => {
    if (isNaN(event.target.value) || event.target.value === "") {
      setScan([]);
    } else {
      setScan(parseInt(event.target.value));
    }
  };

  return (
    <div className="m-3 flex flex-col">
      <label className="select-none text-gray-500">{label}</label>
      <div className="inline-flex items-center justify-center outline-none">
        <Slider
          min={min}
          max={max}
          value={scan}
          onChange={handleSliderChange}
        />
        <Input
          min={min}
          max={max}
          error={scan < min || scan > max}
          value={scan}
          type="number"
          onChange={handleInputChange}
          className="ml-5 w-40"
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
