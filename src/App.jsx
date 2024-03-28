import { Outlet } from "react-router-dom";
import WelcomeDialog from "./components/WelcomeDialog.jsx";
import NavBarNew from "./components/nav-new/NavBarNew.jsx";
import NavBar from "./components/nav/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <NavBarNew />
      <WelcomeDialog />
      <Outlet />
    </>
  );
}

export default App;
