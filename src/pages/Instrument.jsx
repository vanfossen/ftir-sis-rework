import NavBar from "../components/nav/NavBar";

function Instrument() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-green-500">
      <NavBar />
      <div className="flex flex-grow items-center justify-center">
        <p>Instrument</p>
      </div>
    </div>
  );
}

export default Instrument;
