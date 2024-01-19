import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  //createBrowserRouter,
  //RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import MordorSection from "../src/components/mordor/mordor-section.jsx";
import { AllProvider } from "./context/context.jsx";
import { ScrollChangedRoute } from "./components/changedRoute/scrollChangedRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllProvider>
      <Router>
        <ScrollChangedRoute />
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/mordor" element={<MordorSection />} />
        </Routes>
      </Router>
    </AllProvider>
  </React.StrictMode>
);
