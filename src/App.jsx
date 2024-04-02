import { useState } from "react";
import { Outlet } from "react-router-dom";
import OpenDialog from "./components/dialogs/OpenDialog.jsx";
import SaveDialog from "./components/dialogs/SaveDialog.jsx";
import TutorialDialog from "./components/dialogs/TutorialDialog.jsx";
import WelcomeDialog from "./components/dialogs/WelcomeDialog.jsx";
import NavBar from "./components/nav/NavBar.jsx";

function App() {
  const [isOpen, setOpen] = useState(false);

  const [isSave, setSave] = useState(false);

  const [isWelcome, setWelcome] = useState(
    localStorage.getItem("hideWelcomeDialog") !== "true",
  );

  const [isTutorial, setTutorial] = useState(false);

  return (
    <>
      {/* navbar */}
      <NavBar
        toggleOpen={() => setOpen(!isOpen)}
        toggleSave={() => setSave(!isSave)}
        toggleWelcome={() => setWelcome(!isWelcome)}
        toggleTutorial={() => setTutorial(!isTutorial)}
      />

      {/* dialogs (popups) */}
      <OpenDialog isOpen={isOpen} toggleOpen={() => setOpen(!isOpen)} />

      <SaveDialog isSave={isSave} toggleSave={() => setSave(!isSave)} />

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
