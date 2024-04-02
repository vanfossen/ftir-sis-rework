import { useState } from "react";
import { Outlet } from "react-router-dom";
import TutorialDialog from "./components/dialogs/TutorialDialog.jsx";
import WelcomeDialog from "./components/dialogs/WelcomeDialog.jsx";
import NavBar from "./components/nav/NavBar.jsx";

function App() {
  const [isWelcome, setWelcome] = useState(
    localStorage.getItem("hideWelcomeDialog") !== "true",
  );

  const [isTutorial, setTutorial] = useState(false);

  return (
    <>
      {/* navbar */}
      <NavBar
        toggleWelcome={() => setWelcome(!isWelcome)}
        toggleTutorial={() => setTutorial(!isTutorial)}
      />

      {/* dialogs (popups) */}
      <TutorialDialog
        isTutorial={isTutorial}
        toggleTutorial={() => setTutorial(!isTutorial)}
      />
      <WelcomeDialog
        isWelcome={isWelcome}
        toggleWelcome={() => setWelcome(!isWelcome)}
      />

      {/* handle react-router children */}
      <Outlet />
    </>
  );
}

export default App;
