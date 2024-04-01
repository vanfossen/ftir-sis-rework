import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarNew from "./components/nav-new/NavBarNew.jsx";
import NewDialog from "./components/nav-new/NewDialog.jsx";
import TutorialDialog from "./components/nav-new/TutorialDialog.jsx";

function App() {
  const [isWelcome, setWelcome] = useState(
    localStorage.getItem("hideWelcomeDialog") !== "true",
  );

  const [isTutorial, setTutorial] = useState(false);

  return (
    <>
      <NavBarNew
        toggleWelcome={() => setWelcome(!isWelcome)}
        toggleTutorial={() => setTutorial(!isTutorial)}
      />
      <TutorialDialog
        isTutorial={isTutorial}
        toggleTutorial={() => setTutorial(!isTutorial)}
      />
      <NewDialog
        isWelcome={isWelcome}
        toggleWelcome={() => setWelcome(!isWelcome)}
      />
      <Outlet />
    </>
  );
}

export default App;
