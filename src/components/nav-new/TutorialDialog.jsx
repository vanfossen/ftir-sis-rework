import PropTypes from "prop-types";
import Dialog from "../Dialog.jsx";

function TutorialDialog({ isTutorial, toggleTutorial }) {
  return (
    <Dialog isOpen={isTutorial} toggleClose={toggleTutorial}>
      <div className="mx-5 flex flex-col items-center p-3 text-center">
        <p>Tutorial</p>
      </div>
    </Dialog>
  );
}

// PropTypes declaration
TutorialDialog.propTypes = {
  isTutorial: PropTypes.bool,
  toggleTutorial: PropTypes.func,
};

export default TutorialDialog;
