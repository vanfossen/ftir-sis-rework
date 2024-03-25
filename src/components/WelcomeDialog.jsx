import { useState } from "react";
import Dialog from "./Dialog.jsx";

function WelcomeDialog() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <div className="mx-5 flex flex-col items-center p-3 text-center">
        <h1 className="pb-3 text-3xl font-bold underline">
          Welcome to
          <span>
            <span> </span>
            <span className="text-red-500">F</span>
            <span className="text-orange-500">T</span>
            <span className="text-yellow-500">I</span>
            <span className="text-green-500">R</span>
            <span className="text-teal-500">-</span>
            <span className="text-blue-500">S</span>
            <span className="text-indigo-500">I</span>
            <span className="text-purple-500">S</span>
          </span>
          !
        </h1>
        <h2 className="p-1 text-xl">
          Fourier Transform InfraRed-Scientific Instrument Simulator
        </h2>
        <p className="text-md p-3">
          Please use the navigation bar above to explore the application!
        </p>
      </div>
    </Dialog>
  );
}

export default WelcomeDialog;
