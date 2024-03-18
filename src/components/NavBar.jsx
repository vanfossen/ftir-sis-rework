import { useState } from "react";
import { Menu } from "lucide-react";
import { navItems } from "../constants";
import NavItem from "./NavItem";

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
        <div className="flex items-center">
          <img src="/vite.svg" alt="Vite Logo" className="mx-4" />
          <a className="cursor-default text-3xl">
            <span className="text-red-500">F</span>
            <span className="text-orange-500">T</span>
            <span className="text-yellow-500">I</span>
            <span className="text-green-500">R</span>
            <span className="text-teal-500">-</span>
            <span className="text-blue-500">S</span>
            <span className="text-indigo-500">I</span>
            <span className="text-purple-500">S</span>
          </a>
        </div>

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
        <nav className="xl:hidden">
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
