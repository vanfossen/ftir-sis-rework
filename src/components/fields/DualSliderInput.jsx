import PropTypes from "prop-types";

function DualSliderInput({
  label,
  valueMin,
  valueMax,
  min,
  max,
  onChangeMin,
  onChangeMax,
}) {
  return (
    <div>
      <label className="text-gray-500">{label}</label>
      <div>
        {/* <input
          type="number"
          value={valueMin}
          min={min}
          max={max}
          onChange={onChangeMin}
          className="ms-2 inline w-20 rounded border text-center shadow-sm outline-none transition-all invalid:border-red-600 focus:border-blue-600 focus:outline-none focus:ring-0"
        /> */}

        <div className="relative">
          <input
            type="range"
            value={valueMin}
            min={min}
            max={max}
            onChange={onChangeMin}
            className="pointer-events-auto absolute w-full bg-none"
          />
          <input
            type="range"
            value={valueMax}
            min={min}
            max={max}
            onChange={onChangeMax}
            className="pointer-events-auto absolute w-full bg-none"
          />
        </div>

        {/* <input
          type="number"
          value={valueMax}
          min={min}
          max={max}
          onChange={onChangeMax}
          className="ms-2 inline w-20 rounded border text-center shadow-sm outline-none transition-all invalid:border-red-600 focus:border-blue-600 focus:outline-none focus:ring-0"
        /> */}
      </div>
    </div>
  );
}

// PropTypes declaration
DualSliderInput.propTypes = {
  label: PropTypes.string,
  valueMin: PropTypes.string,
  valueMax: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onChangeMin: PropTypes.func,
  onChangeMax: PropTypes.func,
};

export default DualSliderInput;
