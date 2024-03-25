import { Outlet } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import NavBar from "./components/nav/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Outlet />
    </>
  );
}

export default App;
