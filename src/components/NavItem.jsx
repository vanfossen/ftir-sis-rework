import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

function NavItem({ item, isActive, onClick }) {
  const [isSubOpen, setSubOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubOpen(!isSubOpen);
  };

  return (
    <div className="relative px-5">
      {/* menu */}
      <button
        className={`m-1 flex items-center rounded p-2 hover:bg-[#374151] ${isActive ? "bg-[#1e293b] text-orange-500" : "text-white"} `}
        onClick={() => {
          onClick();
          toggleSubMenu();
        }}
      >
        {item.label}
        <ChevronDown size={15} className={`${isActive ? "rotate-180" : ""}`} />
      </button>

      {/* submenu */}
      {isActive && (
        <div className="left-0 mt-1 flex w-full flex-col rounded bg-[#1e293b] p-1 sm:static xl:absolute">
          {item.submenu.map((subItem, index) => (
            <button
              key={index}
              className="m-1 block rounded p-2 text-start text-white hover:bg-[#374151] hover:text-orange-500"
            >
              {subItem.label}
            </button>
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
