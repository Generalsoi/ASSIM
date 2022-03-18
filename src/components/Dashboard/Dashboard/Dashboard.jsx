import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content/Content";
import StudDashboard from "./../Content/StudDashboard/StudDashboard";
import Classes from "./../Content/Classes/Classes";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");

  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="content">
        <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      {/* <Routes>
        <Route
          path="/studDashboard"
          element={<StudDashboard className="content" />}
        />
        <Route path="/classes" element={<Classes className="content" />} />
      </Routes> */}
    </div>
  );
};

export default Dashboard;
