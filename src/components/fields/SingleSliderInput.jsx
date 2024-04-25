import Input from "@mui/joy/Input";
import Slider from "@mui/joy/Slider";
import PropTypes from "prop-types";
import { useState } from "react";

function SingleSliderInput({ label, min, max }) {
  const [value, setValue] = useState(64);

  const handleInput = (event) => {
    if (/^$|^[1-9]\d*$/.test(event.target.value)) {
      setValue(parseInt(event.target.value));
      return;
    }
  };

  return (
    <div className="m-3 flex flex-col">
      <label className="select-none text-gray-500">{label}</label>
      <div className="inline-flex items-center justify-center outline-none">
        <Slider
          min={min}
          max={max}
          color={
            value < min || value > max || isNaN(value) ? "danger" : "primary"
          }
          value={isNaN(value) ? [] : value}
          onChange={handleInput}
          sx={{ width: 200 }}
        />
        <Input
          value={isNaN(value) ? "" : value}
          error={value < min || value > max || isNaN(value)}
          onChange={handleInput}
          sx={{ width: 70, ml: 2 }}
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
