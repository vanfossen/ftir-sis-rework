import PropTypes from "prop-types";

function SelectInput({ label, list }) {
  return (
    <label>
      <span className="text-md block">{label}</span>
      <select className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-lg placeholder-slate-400 shadow-sm transition-all invalid:border-red-600 invalid:text-red-600 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:invalid:border-red-600 focus:invalid:ring-pink-500">
        {list.map((item, i) => (
          <option key={i} value={Object.keys(item)}>
            {Object.values(item)}
          </option>
        ))}
      </select>
    </label>
  );
}

// PropTypes declaration
SelectInput.propTypes = {
  label: PropTypes.string,
  list: PropTypes.array,
};

export default SelectInput;
