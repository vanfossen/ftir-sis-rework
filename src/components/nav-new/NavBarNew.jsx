import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import WelcomeDialog from "../WelcomeDialog";
import CustomAnchor from "./CustomAnchor";
import CustomLink from "./CustomLink";

const navItems = [
  {
    label: "File",
    submenu: [
      {
        url: <CustomAnchor url="https://www.example.com/" label="Open" />,
      },
      {
        url: <CustomAnchor url="https://www.example.com/" label="Save" />,
      },
    ],
  },
  {
    label: "Window",
    submenu: [
      {
        url: <CustomLink url="setup" label="Experimental Setup" />,
      },
      {
        url: <CustomLink url="instrument" label="Instrument" />,
      },
      {
        url: <CustomLink url="spectra" label="Spectra" />,
      },
      {
        url: <CustomAnchor url="https://www.example.com/" label="Find Peaks" />,
      },
    ],
  },
  {
    label: "Measure",
    submenu: [
      {
        url: (
          <CustomAnchor
            url="https://www.example.com/"
            label="Collect Background"
          />
        ),
      },
      {
        url: (
          <CustomAnchor url="https://www.example.com/" label="Collect Sample" />
        ),
      },
      {
        url: (
          <CustomAnchor url="https://www.example.com/" label="Cancel Scan" />
        ),
      },
    ],
  },
  {
    label: "Help",
    submenu: [
      {
        url: <CustomAnchor url="https://www.example.com/" label="Tutorial" />,
      },
      {
        url: <WelcomeDialog>Welcome</WelcomeDialog>,
      },
    ],
  },
];

function NavBar() {
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (index) => {
    setDropdown(index === dropdown ? null : index);
  };

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleMenu = (value) => {
    setMenu(value);
  };

  return (
    <header className="bg-[#0f172a] p-2">
      <div className="flex items-center justify-evenly">
        {/* logo and title */}
        <div className="flex items-center">
          <a
            href="https://www.rastonlab.org"
            target="_blank"
            onClick={() => {
              handleDropdown(null);
              handleMenu(false);
            }}
            className="mx-4 rounded p-1 hover:bg-gray-600"
          >
            <img src="/vite.svg" alt="Vite Logo" />
          </a>

          <Link
            to="/"
            onClick={() => {
              handleDropdown(null);
              handleMenu(false);
            }}
            className="rounded p-1 text-3xl hover:bg-[#374151]"
          >
            <span className="text-red-500">F</span>
            <span className="text-orange-500">T</span>
            <span className="text-yellow-500">I</span>
            <span className="text-green-500">R</span>
            <span className="text-teal-500">-</span>
            <span className="text-blue-500">S</span>
            <span className="text-indigo-500">I</span>
            <span className="text-purple-500">S</span>
          </Link>
        </div>

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
                        handleMenu(false);
                      }}
                    >
                      {subItem.url}
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
            onClick={toggleMenu}
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
                        handleMenu(false);
                      }}
                    >
                      {subItem.url}
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

export default NavBar;
