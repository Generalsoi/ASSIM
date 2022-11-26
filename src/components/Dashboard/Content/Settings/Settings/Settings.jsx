import React, { useState } from "react";
import "./Settings.css";
import MyDetails from "./../MyDetails/MyDetails";
import Password from "./../Password/Password";
import Plan from "./../Plan/Plan";
import Billing from "./../Billing/Billing";
import Sidebar from "../../../Sidebar/Sidebar";
import Logo from "../../../../../assets/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");
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
        <div class="settings">
          <h4>Settings</h4>

          <div className="settings-contents">
            <ul className="settings-contents-headings">
              <li
                className={
                  (activeTab === "tab1" && "active") + " settings-content-heading"
                }
                onClick={() => setActiveTab("tab1")}
              >
                My details
              </li>
              <li
                className={
                  (activeTab === "tab2" && "active") + " settings-content-heading"
                }
                onClick={() => setActiveTab("tab2")}
              >
                Password
              </li>
              {/* <li
                className={
                  (activeTab === "tab3" && "active") + " settings-content-heading"
                }
                onClick={() => setActiveTab("tab3")}
              >
                Plan
              </li>
              <li
                className={
                  (activeTab === "tab4" && "active") + " settings-content-heading"
                }
                onClick={() => setActiveTab("tab4")}
              >
                Billing
              </li>
              <li
                className={
                  (activeTab === "tab5" && "active") + " settings-content-heading"
                }
                onClick={() => setActiveTab("tab5")}
              >
                Notification
              </li> */}
            </ul>

            <div className="settings-info-contents">
              {activeTab === "tab1" && <MyDetails />}
              {activeTab === "tab2" && <Password />}
              {activeTab === "tab3" && <Plan />}
              {activeTab === "tab4" && <Billing />}
            </div>
          </div>
        </div></div>

      <div className="mobile-view">
        <img src={Logo} alt="assim-logo" />
        <MenuIcon className="hamburger" onClick={handleClick} />
      </div>

      {open && <div className="overlay" />}
    </div>
  );
};

export default Settings;
