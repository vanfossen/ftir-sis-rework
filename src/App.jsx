import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarNew from "./components/nav-new/NavBarNew.jsx";
import NewDialog from "./components/nav-new/NewDialog.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("hideWelcomeDialog") !== "true",
  );

  return (
    <>
      <NavBarNew toggleOpen={() => setIsOpen(!isOpen)} />
      <NewDialog isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      <Outlet />
    </>
  );
}

export default App;
