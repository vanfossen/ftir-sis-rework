import Input from "@mui/joy/Input";
import Slider from "@mui/joy/Slider";
import PropTypes from "prop-types";
import { useState } from "react";

function DualSliderInput({ label, min, max }) {
  const [lowerRange, setLowerRange] = useState(1700);
  const [upperRange, setUpperRange] = useState(7000);

  const handleSliderChange = (event, newValue) => {
    setLowerRange(newValue[0]);
    setUpperRange(newValue[1]);
  };

  const handleInputChangeMin = (event) => {
    if (isNaN(event.target.value) || event.target.value === " ") {
      setLowerRange("");
    } else {
      setLowerRange(
        event.target.value === "" ? "" : parseInt(event.target.value),
      );
    }
  };

  const handleInputChangeMax = (event) => {
    if (isNaN(event.target.value) || event.target.value === " ") {
      setUpperRange("");
    } else {
      setUpperRange(
        event.target.value === "" ? "" : parseInt(event.target.value),
      );
    }
  };

  const handleBlur = () => {
    if (lowerRange > upperRange) {
      const [newLowerRange, newUpperRange] = [upperRange, lowerRange];
      setLowerRange(newLowerRange);
      setUpperRange(newUpperRange);
    }
  };

  return (
    <div className="flex flex-col">
      <label className="select-none py-1 text-gray-500">{label}</label>

      <div className="inline-flex">
        <Input
          type="number"
          value={lowerRange}
          error={lowerRange < min}
          onBlur={handleBlur}
          onChange={handleInputChangeMin}
          className="mr-5 w-44"
        />
        <Slider
          getAriaLabel={() => {
            label;
          }}
          value={[lowerRange, upperRange]}
          min={min}
          max={max}
          onChange={handleSliderChange}
        />
        <Input
          type="number"
          value={upperRange}
          error={upperRange > max}
          onBlur={handleBlur}
          onChange={handleInputChangeMax}
          className="ml-5 w-44"
        />
      </div>
    </div>
  );
}

// PropTypes declaration
DualSliderInput.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default DualSliderInput;
