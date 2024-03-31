import PropTypes from "prop-types";

function CustomAnchor({ url, label }) {
  return (
    <a
      href={url}
      target="_blank"
      className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
    >
      {label}
    </a>
  );
}

// PropTypes declaration
CustomAnchor.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
};

export default CustomAnchor;
