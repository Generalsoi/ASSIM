import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import SignUpPageTwo from "./components/SignUp/SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./components/SignUp/SignUpPageThree/SignUpPageThree";
import CompleteSignUp from "./components/SignUp/CompleteSignUp/CompleteSignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/SignUp/Signup";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="completeSignUp" element={<CompleteSignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
