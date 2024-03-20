import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-pink-500">
      <NavBar />
      <div className="flex flex-grow items-center justify-center">
        <p>Homepage</p>
      </div>
    </div>
  );
}

export default App;
