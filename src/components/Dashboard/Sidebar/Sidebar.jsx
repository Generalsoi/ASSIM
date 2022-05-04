import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../../../assets/images/Logo.png";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import UpgradeModal from "../UpgradeModal/UpgradeModal";

const Sidebar = (props) => {
  const [upgrade, setUpgradeModal] = useState(false);
  const { activeMenu, setActiveMenu } = props;

  const handleMenu1 =
    (activeMenu === "menu1" && "activeMenu") + " sidebar-link";
  const handleMenu2 =
    (activeMenu === "menu2" && "activeMenu") + " sidebar-link";
  const handleMenu3 =
    (activeMenu === "menu3" && "activeMenu") + " sidebar-link";
  const handleMenu4 =
    (activeMenu === "menu4" && "activeMenu") + " sidebar-link";
  const handleMenu5 =
    (activeMenu === "menu5" && "activeMenu") + " sidebar-link";
  const handleMenu6 =
    (activeMenu === "menu6" && "activeMenu") + " sidebar-link";

  return (
    <div className="main-sidebar">
      <div className="assim-logo">
        <img src={Logo} alt="assim-logo" />
      </div>

      <div className="sidebar-links">
        <ul>
          <li className={handleMenu1} onClick={() => setActiveMenu("menu1")}>
            <GridViewRoundedIcon />
            <p>Dashboard</p>
          </li>

          <li className={handleMenu2} onClick={() => setActiveMenu("menu2")}>
            <GroupsIcon />
            <p>Classes</p>
          </li>

          <li className={handleMenu3} onClick={() => setActiveMenu("menu3")}>
            <ArticleRoundedIcon />
            <p>Documents</p>
          </li>

          <li className={handleMenu4} onClick={() => setActiveMenu("menu4")}>
            <CalendarMonthRoundedIcon />
            <p>Schedule</p>
          </li>
          <li className={handleMenu5} onClick={() => setActiveMenu("menu5")}>
            <InsertChartRoundedIcon />
            <p>Achievements</p>
          </li>
          <li className={handleMenu6} onClick={() => setActiveMenu("menu6")}>
            <SettingsIcon />
            <p>Settings</p>
          </li>
        </ul>
      </div>

      <div className="sidebar-btns">
        <button
          className="upgrade-plan-btn"
          onClick={() => setUpgradeModal(true)}
        >
          Upgrade Plan
        </button>
        <button className="contact-support-btn">Contact Support</button>
        <div className="sign-out">
          <LogoutIcon />
          <p>Sign Out</p>
        </div>
      </div>

      {upgrade && <UpgradeModal setUpgradeModal={setUpgradeModal} />}
    </div>
  );
};

export default Sidebar;
