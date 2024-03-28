import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

function NavItem({ item, isActive, handleDropdown, handleMenu }) {
  return (
    <div className="relative px-5">
      {/* menu */}
      <button
        className={`m-1 flex items-center rounded p-2 hover:bg-[#374151] ${isActive ? "bg-[#1e293b] text-orange-500" : "text-white"} `}
        onClick={() => {
          handleDropdown(null);
        }}
      >
        {item.label}
        <ChevronDown size={15} className={`${isActive ? "rotate-180" : ""}`} />
      </button>

      {/* submenu */}
      {isActive && (
        <div className="left-0 mt-1 flex w-full flex-col rounded bg-[#1e293b] p-1 sm:static xl:absolute">
          <ul>
            {item.submenu.map((subItem, index) => (
              <li
                key={index}
                onClick={() => {
                  handleDropdown(null);
                  handleMenu(false);
                }}
              >
                {subItem.url}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// PropTypes declaration
NavItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
  handleDropdown: PropTypes.func,
  handleMenu: PropTypes.func,
};

export default NavItem;
