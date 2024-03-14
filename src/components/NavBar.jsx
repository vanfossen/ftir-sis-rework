import { navItems } from "../constants";

function NavBar() {
  return (
    <nav className="flex justify-evenly bg-[#0f172a] p-2">
      <div className="flex items-center">
        <img src="/vite.svg" alt="test logo" />
        <a>
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

      <div className="flex">
        {navItems.map((item, i) => (
          <div key={i} className="group relative">
            <ul>
              <li className="cursor-default p-2 text-white transition-all group-hover:bg-[#1e293b] group-hover:text-orange-500">
                {item.label}
              </li>
            </ul>
            {item.submenu && (
              <ul className="absolute hidden w-full bg-white text-center transition-all group-hover:block">
                {item.submenu.map((sub, j) => (
                  <li key={j}>
                    <a
                      href={sub.url}
                      target="_blank"
                      className="flex grow justify-center hover:bg-slate-300"
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
