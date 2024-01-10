import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MordorSection from "../src/components/mordor/mordor-section.jsx";
import { AllProvider } from "./context/context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "mordor",
    element: <MordorSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProvider>
      <RouterProvider router={router} />
    </AllProvider>
  </React.StrictMode>
);
