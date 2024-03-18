import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ExperimentalSetup from "./pages/ExperimentalSetup.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./index.css";
import Instrument from "./pages/Instrument.jsx";
import Spectra from "./pages/Spectra.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  {
    path: "/setup",
    element: <ExperimentalSetup />,
    errorElement: <NotFound />,
  },
  {
    path: "/instrument",
    element: <Instrument />,
    errorElement: <NotFound />,
  },
  {
    path: "/spectra",
    element: <Spectra />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
