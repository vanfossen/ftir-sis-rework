import { X } from "lucide-react";
import PropTypes from "prop-types";

function NewDialog({ isOpen, toggleOpen }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 py-32 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mx-auto max-h-full max-w-xl overflow-x-hidden rounded-xl bg-white">
        <div className="flex items-center justify-end border-b border-gray-200 p-3">
          <button onClick={toggleOpen} className="rounded hover:bg-gray-300">
            <X />
          </button>
        </div>
        <div className="mx-5 flex flex-col items-center p-3 text-center">
          <p>Tutorial</p>
        </div>
      </div>
    </div>
  );
}

// PropTypes declaration
NewDialog.propTypes = {
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

export default NewDialog;
