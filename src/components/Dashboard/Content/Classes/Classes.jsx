import React from "react";
import "./Classes.css";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import RecentlyAdded from "./RecentlyAdded";
// import AssimClasses from "./AssimClasses";
// import FeaturedClasses from "./FeaturedClasses";
import Sidebar from "../../Sidebar/Sidebar";
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { accessToken } from "../../../../config";
import BackdropLoader from '../../../Loader/BackdropLoader';
import { useEffect, useState } from "react";
import useAxiosGet2 from '../../../../customHooks/useAxiosGet2';



const Classes = () => {
  const [activeMenu, setActiveMenu] = useState("menu1");
  const [open, setOpen] = useState(false);
  const [classes, setClasses] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };
  const userId = localStorage.getItem('userInfo');
  const { response, loading } = useAxiosGet2({
    method: 'get',
    url: `myCurrentClasses?userId=${userId.id}&access_token=${accessToken}`,
  });

  useEffect(() => {
    if (response) {
      setClasses(response.rows);
    }
  }, [response]);

  return (
    <>
      {loading ? <BackdropLoader /> : null}
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

            <RecentlyAdded
              classes={classes}
            />
            {/* <AssimClasses /> */}
            {/* <FeaturedClasses /> */}
          </div>    </div>

        <div className="mobile-view">
          <img src={Logo} alt="assim-logo" />
          <MenuIcon className="hamburger" onClick={handleClick} />
        </div>

        {open && <div className="overlay" />}
      </div>
    </>
  );
};

export default Classes;
