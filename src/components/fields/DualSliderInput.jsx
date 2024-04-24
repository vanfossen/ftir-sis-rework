import Input from "@mui/joy/Input";
import Slider from "@mui/joy/Slider";
import PropTypes from "prop-types";

function DualSliderInput({ label, unit, value, min, max, onChange }) {
  return (
    <div className="flex flex-col">
      <label className="select-none py-1 text-gray-500">
        {label} {unit}
      </label>

      <div className="inline-flex">
        <Input value={value[0]} className="mr-5 w-40" />
        <Slider
          getAriaLabel={() => {
            label;
          }}
          value={value}
          min={min}
          max={max}
          onChange={onChange}
          getAriaValueText={() => `${label}${unit}`}
          xs={{ width: 200 }}
        />
        <Input value={value[1]} className="ml-5 w-40" />
      </div>
    </div>
  );
}

// PropTypes declaration
DualSliderInput.propTypes = {
  label: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default DualSliderInput;
