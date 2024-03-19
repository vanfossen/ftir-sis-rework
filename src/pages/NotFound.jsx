import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-800 text-white">
      <img width="150" src="/vite.svg" alt="Vite Logo" />

      <p className="text-9xl">404</p>

      <p className=" text-4xl">Page Not Found</p>

      <Link
        className="mt-10 rounded bg-gray-700 p-3 text-3xl hover:bg-gray-600 hover:text-orange-500"
        to="/"
      >
        Return To Homepage
      </Link>
    </div>
  );
}

export default NotFound;
