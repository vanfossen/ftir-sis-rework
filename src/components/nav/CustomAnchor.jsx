import PropTypes from "prop-types";

function CustomAnchor({ url, label, onClick }) {
  return (
    <a
      tabIndex={-1}
      href={url}
      target="_blank"
      onClick={onClick}
      className="m-0 block rounded p-2 text-start text-white transition-all hover:bg-[#374151] hover:text-orange-500"
    >
      {label}
    </a>
  );
}

// PropTypes declaration
CustomAnchor.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomAnchor;
