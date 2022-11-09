import React, { useState } from "react";
import StudentDashboardHeader from "../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Sidebar from "../../Sidebar/Sidebar";
import './Schedule.css'
import Logo from "../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Calender from "./Calender";

const Schedule = () => {
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
                <div className="student-dashboard">
                    <StudentDashboardHeader />

                    <div className="welcome-message">
                        <h2>
                            Schedule
                        </h2>
                        <p>
                            Hello, David. Here is your schedule.
                        </p>
                    </div>
                    <Calender />
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

export default Schedule;
