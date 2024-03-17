import { useState } from "react";
import { navItems } from "../constants";
import NavItem from "./NavItem";

function NavBar() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
  };

  return (
    <header className="flex flex-row items-center justify-evenly bg-[#0f172a] py-3">
      <div className="flex flex-row items-center">
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

      <nav className="flex flex-row">
        {navItems.map((item, i) => (
          <NavItem
            key={i}
            item={item}
            isActive={activeButton === i}
            onClick={() => handleButtonClick(i)}
          />
        ))}
      </nav>
    </header>
  );
}

export default NavBar;
