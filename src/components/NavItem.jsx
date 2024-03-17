import PropTypes from "prop-types";
import { useState } from "react";

function NavItem({ item, isActive, onClick }) {
  const [isSubOpen, setSubOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubOpen(!isSubOpen);
  };

  return (
    <div className="relative px-5">
      <button
        className={`flex flex-row items-center rounded px-2 py-1  ${isActive ? "bg-[#1e293b] text-orange-500" : "text-white"}`}
        onClick={() => {
          onClick();
          toggleSubMenu();
        }}
      >
        {item.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${isActive ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {isActive && (
        <div className="absolute left-0 mt-2 w-full rounded bg-[#1e293b] shadow-lg">
          {item.submenu.map((subItem, index) => (
            <a
              key={index}
              href={subItem.url}
              target="_blank"
              className="block px-4 py-2 text-white hover:bg-[#374151] hover:text-orange-500"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// PropTypes declaration
NavItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default NavItem;
