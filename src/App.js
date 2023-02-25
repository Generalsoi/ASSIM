import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CompleteSignUp from "./components/SignUp/CompleteSignUp/CompleteSignUp";
import Signup from "./components/SignUp/Signup";
import Classes from "./components/Dashboard/Content/Classes/Classes";
import StudDashboard from "./components/Dashboard/Content/StudDashboard/StudDashboard";
import SignIn from "./components/SignIn/SignIn";
import Schedule from "./components/Dashboard/Content/Schedule/Schedule";
import Settings from "./components/Dashboard/Content/Settings/Settings/Settings";
import Achievements from "./components/Dashboard/Content/Achievements/Achievements";
import Documents from "./components/Dashboard/Content/Documents/Documents";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ClassVideos from "./components/Dashboard/Content/Classes/ClassVideos";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="completeSignUp" element={<CompleteSignUp />} />
        <Route path="dashboard" element={<StudDashboard />} />
        <Route path="classes" element={<Classes />} />
        <Route path="settings" element={<Settings />} />
        <Route path="achivements" element={<Achievements />} />
        <Route path="documents" element={<Documents />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="/class-videos" element={<ClassVideos />} />
      </Routes>
    </Router>
  );
}

export default App;
