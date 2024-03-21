import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ExperimentalSetup from "./pages/ExperimentalSetup.jsx";
import Instrument from "./pages/Instrument.jsx";
import NotFound from "./pages/NotFound.jsx";
import Spectra from "./pages/Spectra.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <ExperimentalSetup />,
      },
      {
        path: "setup",
        element: <ExperimentalSetup />,
      },
      {
        path: "instrument",
        element: <Instrument />,
      },
      {
        path: "spectra",
        element: <Spectra />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
