import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { navItems } from "../../constants";

function OldNavBar() {
  return (
    <nav className="flex justify-evenly bg-[#0f172a] p-2">
      <div className="flex items-center">
        <img src="/vite.svg" alt="test logo" className="px-4" />
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

      <div className="flex items-center">
        {navItems.map((item, i) => (
          <OldNavItem key={i} item={item} />
        ))}
      </div>
    </nav>
  );
}

function OldNavItem({ item }) {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const submenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="relative" ref={submenuRef}>
      <button
        className="flex items-center px-5 text-lg text-white transition-all focus:bg-[#1e293b] focus:text-orange-500 focus:outline-none"
        onClick={toggleSubMenu}
        aria-haspopup={item.submenu ? "true" : "false"}
      >
        {item.label}
        {item.submenu && (
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
            className={`ml-1 ${isSubMenuOpen ? "rotate-180 transform" : ""}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        )}
      </button>
      {item.submenu && isSubMenuOpen && (
        <ul className="absolute w-full bg-[#1e293b] text-center">
          {item.submenu.map((sub, j) => (
            <li key={j}>
              <a
                href={sub.url}
                target="_blank"
                className="block py-2 text-base text-white hover:bg-orange-500"
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

OldNavItem.propTypes = {
  item: PropTypes.object,
};

export default OldNavBar;
