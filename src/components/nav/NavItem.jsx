import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import CustomAnchor from "./CustomAnchor.jsx";

function NavItem({ item, isActive, handleDropdown, handleMenu, dialog }) {
  return (
    <div className="relative px-5">
      {/* menu */}
      <button
        className={`m-1 flex items-center rounded p-2 transition-all hover:bg-[#374151] ${isActive ? "bg-[#1e293b] text-orange-500" : "text-white"} `}
        onClick={() => handleDropdown()}
      >
        {item.label}
        <ChevronDown size={15} className={`${isActive ? "rotate-180" : ""}`} />
      </button>

      {/* submenu */}
      {isActive && (
        <div className="left-0 z-10 m-1 flex w-full flex-col rounded bg-[#1e293b] p-1 sm:static xl:absolute">
          {item.submenu.map((subItem, index) => (
            <button
              key={index}
              onClick={() => {
                handleDropdown();
                handleMenu();
              }}
              className="m-1 p-0"
            >
              {subItem.dialog ? (
                <CustomAnchor
                  label={subItem.label}
                  onClick={() => {
                    switch (subItem.url) {
                      case "openDialog":
                        dialog.open();
                        break;
                      case "saveDialog":
                        dialog.save();
                        break;
                      case "welcomeDialog":
                        dialog.welcome();
                        break;
                      case "tutorialDialog":
                        dialog.tutorial();
                        break;
                    }
                  }}
                />
              ) : (
                subItem.url
              )}
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
  handleDropdown: PropTypes.func,
  handleMenu: PropTypes.func,
  dialog: PropTypes.object,
};

export default NavItem;
