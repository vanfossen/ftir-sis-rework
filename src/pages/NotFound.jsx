import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-800 text-5xl text-white">
      <NavBar />

      <p>404 Not Found</p>

      <Link className="bg-gray-700 hover:bg-gray-600" to="/">
        Home
      </Link>
    </div>
  );
}

export default NotFound;
