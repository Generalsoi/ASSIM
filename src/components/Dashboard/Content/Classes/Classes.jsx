import React, { useState } from "react";
import "./Classes.css";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import RecentlyAdded from "./RecentlyAdded";
import AssimClasses from "./AssimClasses";
import FeaturedClasses from "./FeaturedClasses";
import Sidebar from "../../Sidebar/Sidebar";
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Classes = () => {
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
        <div className="classes">
          <StudentDashboardHeader />

          <div className="welcome-message">
            <h2>Classes</h2>
          </div>

          <RecentlyAdded />
          <AssimClasses />
          <FeaturedClasses />
        </div>    </div>

      <div className="mobile-view">
        <img src={Logo} alt="assim-logo" />
        <MenuIcon className="hamburger" onClick={handleClick} />
      </div>

      {open && <div className="overlay" />}
    </div>
  );
};

export default Classes;
