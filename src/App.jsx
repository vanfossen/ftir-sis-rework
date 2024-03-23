import { Outlet } from "react-router-dom";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
