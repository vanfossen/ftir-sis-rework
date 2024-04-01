import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarNew from "./components/nav-new/NavBarNew.jsx";
import NewDialog from "./components/nav-new/NewDialog.jsx";
import TutorialDialog from "./components/nav-new/TutorialDialog.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(
    localStorage.getItem("hideWelcomeDialog") !== "true",
  );

  const [isTutorial, setTutorial] = useState(false);

  return (
    <>
      <NavBarNew
        toggleOpen={() => setIsOpen(!isOpen)}
        toggleTutorial={() => setTutorial(!isTutorial)}
      />
      <TutorialDialog
        isOpen={isTutorial}
        toggleOpen={() => setTutorial(!isTutorial)}
      />
      <NewDialog isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      <Outlet />
    </>
  );
}

export default App;
