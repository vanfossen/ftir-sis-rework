import { ChevronDown, Menu } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { navItems } from "../../constants/navItems.jsx";
import CustomAnchor from "./CustomAnchor.jsx";
import NavTitle from "./NavTitle.jsx";

function NavBar({ toggleWelcome, toggleTutorial }) {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (index) => {
    setDropdown(index === dropdown ? null : index);
  };

  const [menu, setMenu] = useState(false);

  const toggleMenu = (value) => {
    setMenu(value === undefined ? !menu : value);
  };

  return (
    <header className="bg-[#0f172a] p-2">
      <div className="flex items-center justify-evenly">
        {/* logo and title */}
        <NavTitle
          handleDropdown={() => handleDropdown()}
          toggleMenu={() => toggleMenu(false)}
        />

        {/* desktop view of nav menus */}
        <nav className="hidden xl:flex">
          {navItems.map((item, i) => (
            <div key={i} className="relative px-5">
              {/* menu */}
              <button
                className={`m-1 flex items-center rounded p-2 hover:bg-[#374151] ${dropdown === i ? "bg-[#1e293b] text-orange-500" : "text-white"} `}
                onClick={() => handleDropdown(i)}
              >
                {item.label}
                <ChevronDown
                  size={15}
                  className={`${dropdown === i ? "rotate-180" : ""}`}
                />
              </button>

              {/* submenu */}
              {dropdown === i && (
                <div className="left-0 mt-1 flex w-full flex-col rounded bg-[#1e293b] p-1 sm:static xl:absolute">
                  {item.submenu.map((subItem, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleDropdown(null);
                        toggleMenu();
                      }}
                    >
                      {subItem.dialog ? (
                        <CustomAnchor
                          label={subItem.label}
                          onClick={() => {
                            switch (subItem.url) {
                              case "welcomeDialog":
                                toggleWelcome();
                                break;
                              case "tutorialDialog":
                                toggleTutorial();
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
          ))}
        </nav>

        {/* mobile view of nav menus (hamburger) */}
        <nav className="flex xl:hidden">
          <button
            className={`rounded hover:bg-[#374151] ${menu ? "bg-[#374151]" : ""}`}
            onClick={() => toggleMenu()}
          >
            <Menu size={35} color={menu ? "#F97316" : "white"} />
          </button>
        </nav>
      </div>

      {/* mobile view of nav menus (menu itself) */}
      {menu && (
        <div className="bg-[#0f172a] xl:hidden">
          {navItems.map((item, i) => (
            <div key={i} className="relative px-5">
              {/* menu */}
              <button
                className={`m-1 flex items-center rounded p-2 hover:bg-[#374151] ${dropdown === i ? "bg-[#1e293b] text-orange-500" : "text-white"} `}
                onClick={() => {
                  handleDropdown(i);
                }}
              >
                {item.label}
                <ChevronDown
                  size={15}
                  className={`${dropdown === i ? "rotate-180" : ""}`}
                />
              </button>

              {/* submenu */}
              {dropdown === i && (
                <div className="left-0 mt-1 flex w-full flex-col rounded bg-[#1e293b] p-1 sm:static xl:absolute">
                  {item.submenu.map((subItem, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleDropdown(null);
                        toggleMenu();
                      }}
                    >
                      {subItem.dialog ? (
                        <CustomAnchor
                          label={subItem.label}
                          onClick={() => {
                            switch (subItem.url) {
                              case "welcomeDialog":
                                toggleWelcome();
                                break;
                              case "tutorialDialog":
                                toggleTutorial();
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
          ))}
        </div>
      )}
    </header>
  );
}

// PropTypes declaration
NavBar.propTypes = {
  toggleWelcome: PropTypes.func,
  toggleTutorial: PropTypes.func,
};

export default NavBar;
