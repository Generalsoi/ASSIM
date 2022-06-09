import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content/Content";
import StudDashboard from "./../Content/StudDashboard/StudDashboard";
import Classes from "./../Content/Classes/Classes";
import Logo from "../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="dashboard">
      <div className={open ? "sidebar-mobile open" : "sidebar"}>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="content">
        <Content activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>

      <div className="mobile-view">
        <img src={Logo} alt="assim-logo" />
        <MenuIcon className="hamburger" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Dashboard;
