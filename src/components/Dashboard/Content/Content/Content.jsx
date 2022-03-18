import React from "react";
import "./Content.css";
import StudDashboard from "../StudDashboard/StudDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Classes from "../Classes/Classes";
import StudentDashboardHeader from "./../../../../common/StudentDashboardHeader/StudentDashboardHeader";

const Content = (props) => {
  const { activeMenu } = props;
  return (
    <div>
      {activeMenu === "menu1" && <StudDashboard />}
      {activeMenu === "menu2" && <Classes />}
      {/* <Routes>
        <Route path="/studDashboard" element={<StudDashboard />} />
        <Route path="/classes" element={<Classes />} />
      </Routes> */}
    </div>
  );
};

export default Content;
