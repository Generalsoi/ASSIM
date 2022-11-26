import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import "./StudDashboard.css";
import ClassInformation from "./ClassInformation/ClassInformation";
import TopClassesAndPerformers from "./TopClassesAndPerformers/TopClassesAndPerformers";
import Sidebar from "../../Sidebar/Sidebar";
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import useAxiosGet from '../../../../customHooks/useAxiosGet';

const StudDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const handleClick = () => {
    setOpen(!open);
  };

  const { response } = useAxiosGet({
    method: 'get',
    url: `users/me`,
  });

  React.useEffect(() => {
    if (response) {
      setUserProfile(response);
    }
  }, [response]);

  return (

    <div className="dashboard">
      <div className={open ? "sidebar-mobile open" : "sidebar"}>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>
      <div className="content">
        <div className="student-dashboard">
          <StudentDashboardHeader />

          <div className="welcome-message">
            <h2>
              Welcome back, <span>{userProfile.name}</span>
            </h2>
            <p>
              We have saved your prevous classes for you so you can keep up and
              improve your progress
            </p>
          </div>

          <ClassInformation />
          <TopClassesAndPerformers />
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

export default StudDashboard;
