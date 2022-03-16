import React from "react";
import "./Sidebar.css";
import Logo from "../../../assets/images/Logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="assim-logo">
        <img src={Logo} alt="assim-logo" />
      </div>

      <div className="sidebar-links">
        <ul>
          <Link to="/studDashboard" className="sidebarLink">
            <li className="sidebar-link">
              <GridViewRoundedIcon />
              <p>Dashboard</p>
            </li>
          </Link>

          <Link to="/classes" className="sidebarLink">
            <li className="sidebar-link">
              <GroupsIcon />
              <p>Classes</p>
            </li>
          </Link>

          <Link to="" className="sidebarLink">
            <li className="sidebar-link">
              <ArticleRoundedIcon />
              <p>Documents</p>
            </li>
          </Link>

          <li className="sidebar-link">
            <CalendarMonthRoundedIcon />
            <p>Schedule</p>
          </li>
          <li className="sidebar-link">
            <InsertChartRoundedIcon />
            <p>Achievements</p>
          </li>
          <li className="sidebar-link">
            <SettingsIcon />
            <p>Settings</p>
          </li>
        </ul>
      </div>

      <div className="sidebar-btns">
        <button className="upgrade-plan-btn">Upgrade Plan</button>
        <button className="contact-support-btn">Contact Support</button>
        <div className="sign-out">
          <LogoutIcon />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;