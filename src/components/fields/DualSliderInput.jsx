import { Input, Slider } from "@mui/joy";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function DualSliderInput({ label, min, max }) {
  const [lowerRange, setLowerRange] = useState(1700);
  const [upperRange, setUpperRange] = useState(7000);

  const handleSliderChange = (event, newValue) => {
    setLowerRange(newValue[0]);
    setUpperRange(newValue[1]);
  };

  const handleInputMin = (event) => {
    if (/^$|^[1-9]\d*$/.test(event.target.value)) {
      setLowerRange(parseInt(event.target.value));
      return;
    }
  };

  const handleInputMax = (event) => {
    if (/^$|^[1-9]\d*$/.test(event.target.value)) {
      setUpperRange(parseInt(event.target.value));
      return;
    }
  };

  const handleBlur = () => {
    if (lowerRange > upperRange) {
      const [newLowerRange, newUpperRange] = [upperRange, lowerRange];
      setLowerRange(newLowerRange);
      setUpperRange(newUpperRange);
    }
  };

  const [error, setError] = useState(false);

  useEffect(() => {
    if (
      lowerRange < min ||
      lowerRange > max ||
      isNaN(lowerRange) ||
      upperRange < min ||
      upperRange > max ||
      isNaN(upperRange)
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [lowerRange, upperRange, min, max, error]);

  return (
    <div className="flex flex-col">
      <label className="select-none py-1 text-gray-500">{label}</label>

      <div className="inline-flex">
        <Input
          value={isNaN(lowerRange) ? "" : lowerRange}
          error={error}
          onChange={handleInputMin}
          onBlur={handleBlur}
          sx={{ width: 150, mr: 2 }}
        />
        <Slider
          getAriaLabel={() => {
            label;
          }}
          value={
            isNaN(lowerRange) || isNaN(upperRange)
              ? []
              : [lowerRange, upperRange]
          }
          color={error ? "danger" : "primary"}
          min={min}
          max={max}
          onChange={handleSliderChange}
        />
        <Input
          value={isNaN(upperRange) ? "" : upperRange}
          error={error}
          onChange={handleInputMax}
          onBlur={handleBlur}
          sx={{ width: 150, ml: 2 }}
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
