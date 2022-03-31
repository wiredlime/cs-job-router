import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";

import NoMatchPage from "./pages/NoMatchPage";

function App() {
  let location = useLocation();
  let state = location.state;
  console.log(state);

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="/form" element={<FormPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
