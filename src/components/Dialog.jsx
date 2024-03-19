import { X } from "lucide-react";
import PropTypes from "prop-types";

// ----- USE -----
// import Dialog from "./components/Dialog.jsx";
// import { useState } from "react";

// const [isOpen, setIsOpen] = useState(false);
// const handleClose = () => setIsOpen(false);

// <button onClick={() => setIsOpen(true)}>Open Dialog</button>;
// {
//   isOpen && (
//     <Dialog isOpen={isOpen} onClose={handleClose}>
//       <p>This is the content of the dialog.</p>
//     </Dialog>
//   );
// }

function Dialog({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="mx-auto mt-40 max-w-md rounded-lg bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <h1>Dialog Title</h1>
          <button onClick={onClose} className="rounded hover:bg-gray-300">
            <X />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

// PropTypes declaration
Dialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.object,
};

export default Dialog;
