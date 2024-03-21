import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
