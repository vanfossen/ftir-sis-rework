import { Outlet } from "react-router-dom";
import NavBarNew from "./components/nav-new/NavBarNew.jsx";

function App() {
  return (
    <>
      <NavBarNew />
      <Outlet />
    </>
  );
}

export default App;
