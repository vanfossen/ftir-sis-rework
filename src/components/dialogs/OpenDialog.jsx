import PropTypes from "prop-types";
import Dialog from "./Dialog.jsx";

function OpenDialog({ isOpen, toggleOpen }) {
  return (
    <Dialog isOpen={isOpen} toggleClose={toggleOpen}>
      <div className="mx-5 flex flex-col items-center p-3 text-center">
        <h1 className="pb-3 text-4xl font-bold underline">{`Open`}</h1>
        <div className="text-md text-start">
          <p>
            {`A sed autem eveniet omnis sit. Omnis molestiae est aliquam aut tempore. Aperiam ea perferendis sit unde porro omnis excepturi. Facilis sit nihil sequi nostrum maxime soluta. Sapiente in accusantium laudantium labore. Praesentium id error a possimus id.`}
          </p>
        </div>
      </div>
    </Dialog>
  );
}

// PropTypes declaration
OpenDialog.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default OpenDialog;
