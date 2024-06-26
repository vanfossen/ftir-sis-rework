import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomLink({ url, label }) {
  return (
    <Link
      tabIndex={-1}
      to={url}
      className="m-0 block rounded p-2 text-start text-white transition-all hover:bg-[#374151] hover:text-orange-500"
    >
      {label}
    </Link>
  );
}

// PropTypes declaration
CustomLink.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
};

export default CustomLink;
