import { Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../constants";
import NavItem from "./NavItem";
import NavTitle from "./NavTitle";

function NavBar() {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    setDropdown(index === dropdown ? null : index);
  };

  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  return (
    <header className="bg-[#0f172a] p-2">
      <div className="flex items-center justify-evenly">
        {/* logo and title */}
        <NavTitle />

        {/* desktop view of nav menus */}
        <nav className="hidden xl:flex">
          {navItems.map((item, i) => (
            <NavItem
              key={i}
              item={item}
              isActive={dropdown === i}
              onClick={() => handleDropdownClick(i)}
            />
          ))}
        </nav>

        {/* mobile view of nav menus (hamburger) */}
        <nav className="flex xl:hidden">
          <button
            className={`rounded hover:bg-[#374151] ${menu ? "bg-[#374151]" : ""}`}
            onClick={handleMenuClick}
          >
            <Menu size={35} color="white" />
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
              onClick={() => handleDropdownClick(i)}
            />
          ))}
        </div>
      )}
    </header>
  );
}

export default NavBar;
