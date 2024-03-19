import { Link } from "react-router-dom";

function NavTitle() {
  return (
    <div className="flex items-center">
      <a
        href="https://www.rastonlab.org"
        target="_blank"
        className="mx-4 rounded p-1 hover:bg-gray-600"
      >
        <img src="/vite.svg" alt="Vite Logo" />
      </a>

      <Link to="/" className="rounded p-1 text-3xl hover:bg-[#374151]">
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
  );
}

export default NavTitle;
