import { navItems } from "../constants";

function NavBar() {
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
          <div key={i} className="group relative">
            <ul>
              <li className="flex cursor-default items-center px-5 text-lg text-white transition-all group-hover:bg-[#1e293b] group-hover:text-orange-500">
                {item.label}

                {/* https://lucide.dev/icons/chevron-down */}
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
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </li>
            </ul>
            {item.submenu && (
              <ul className="absolute hidden w-full bg-[#1e293b] text-center group-hover:block">
                {item.submenu.map((sub, j) => (
                  <li key={j}>
                    <a
                      href={sub.url}
                      target="_blank"
                      className="flex grow justify-center py-2 text-base text-white hover:bg-orange-500"
                    >
                      {sub.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
