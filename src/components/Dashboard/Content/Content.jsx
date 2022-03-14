import React from "react";
import "./Content.css";
import StudDashboard from "./StudDashboard/StudDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Classes from "./Classes/Classes";

const Content = () => {
  return (
    <Router className="contents">
      <Routes>
        <Route path="/studDashboard" element={<StudDashboard />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
    </Router>
  );
};

export default Content;
