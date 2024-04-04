import PropTypes from "prop-types";

// https://tailwindcss.com/docs/hover-focus-and-other-states
function TextInput({ label, type }) {
  return (
    <label>
      <span className="text-md block">{label}</span>
      <input
        type={type}
        placeholder="Enter here..."
        className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base placeholder-slate-400 shadow-sm invalid:border-red-600 invalid:text-red-600 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:invalid:border-red-600 focus:invalid:ring-pink-500"
      />
    </label>
  );
}

// PropTypes declaration
TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
