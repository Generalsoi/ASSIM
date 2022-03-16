import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CompleteSignUp from "./components/SignUp/CompleteSignUp/CompleteSignUp";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Signup from "./components/SignUp/Signup";
import Classes from "./components/Dashboard/Content/Classes/Classes";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="completeSignUp" element={<CompleteSignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="classes" element={<Classes />} />
      </Routes>
    </Router>
  );
}

export default App;
