import PropTypes from "prop-types";
import { useState } from "react";

function TextInput({ label, min, max, step }) {
  const [textValue, setTextValue] = useState(1);

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div className="relative m-1">
      <input
        type="number"
        step={step}
        min={min}
        max={max}
        required
        id="floating_outlined"
        value={textValue}
        onChange={handleChange}
        className="peer block rounded-lg border px-2.5 pb-2.5 pt-4 text-base shadow-sm invalid:border-red-600 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder=""
      />
      <label
        htmlFor="floating_outlined"
        className="absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}

// PropTypes declaration
TextInput.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default TextInput;
