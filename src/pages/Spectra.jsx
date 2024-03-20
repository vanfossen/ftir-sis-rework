import NavBar from "../components/nav/NavBar";

function Spectra() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-blue-500">
      <NavBar />
      <div className="flex flex-grow items-center justify-center">
        <p>Spectra</p>
      </div>
    </div>
  );
}

export default Spectra;
