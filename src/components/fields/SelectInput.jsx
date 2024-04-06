import PropTypes from "prop-types";

function SelectInput({ label, list }) {
  return (
    <div className="relative m-1">
      <select
        id="selected_input"
        className="peer block w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-2.5 text-sm shadow-sm outline-none transition-all focus:border-blue-500"
      >
        {list.map((item, i) => (
          <option key={i} value={Object.keys(item)}>
            {Object.values(item)}
          </option>
        ))}
      </select>
      <label
        htmlFor="selected_input"
        className="absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 select-none bg-white px-2 text-sm text-gray-500 transition-all peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}

// PropTypes declaration
SelectInput.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
};

export default SelectInput;
