import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import AssimDocuments from "./AssimDocuments";
import NewDocuments from "./NewDocuments";
import "./Documents.css"
import PopularDocuments from "./PopularDocuments";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../../assets/images/Logo.png";

const Documents = () => {
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
        <div className="documents-sect">
          <StudentDashboardHeader />

          <div className="welcome-message">
            <h2>Documents</h2>
          </div>

          <NewDocuments />
          <AssimDocuments />
          <PopularDocuments />
        </div>
      </div>

      <div className="mobile-view">
        <img src={Logo} alt="assim-logo" />
        <MenuIcon className="hamburger" onClick={handleClick} />
      </div>

      {open && <div className="overlay" />}
    </div>

  );
};

export default Documents;
