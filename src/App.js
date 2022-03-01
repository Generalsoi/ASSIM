import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import SignUpPageTwo from "./components/SignUp/SignUpPageTwo/SignUpPageTwo";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="studentSignUpPageTwo" element={<SignUpPageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
