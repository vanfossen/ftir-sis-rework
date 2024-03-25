import { Outlet } from "react-router-dom";
import WelcomeDialog from "./components/WelcomeDialog.jsx";
import NavBar from "./components/nav/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <WelcomeDialog />
      <Outlet />
    </>
  );
}

export default App;
