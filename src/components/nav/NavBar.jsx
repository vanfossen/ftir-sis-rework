import { Menu } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { navItems } from "../../constants/navItems.jsx";
import NavItem from "./NavItem.jsx";
import NavTitle from "./NavTitle.jsx";

function NavBar({ toggleOpen, toggleWelcome, toggleTutorial }) {
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
            <NavItem
              key={i}
              item={item}
              isActive={dropdown === i}
              handleDropdown={() => handleDropdown(i)}
              handleMenu={() => toggleMenu(false)}
              dialog={{
                open: toggleOpen,
                welcome: toggleWelcome,
                tutorial: toggleTutorial,
              }}
            />
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
            <NavItem
              key={i}
              item={item}
              isActive={dropdown === i}
              handleDropdown={() => handleDropdown(i)}
              handleMenu={() => toggleMenu(false)}
              dialog={{
                open: toggleOpen,
                welcome: toggleWelcome,
                tutorial: toggleTutorial,
              }}
            />
          ))}
        </div>
      )}
    </header>
  );
}

// PropTypes declaration
NavBar.propTypes = {
  toggleOpen: PropTypes.func,
  toggleWelcome: PropTypes.func,
  toggleTutorial: PropTypes.func,
};

export default NavBar;
