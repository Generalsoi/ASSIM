import React, { useState } from "react";
import "./Settings.css";
import MyDetails from "./../MyDetails/MyDetails";
import Password from "./../Password/Password";
import Plan from "./../Plan/Plan";
import Billing from "./../Billing/Billing";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
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
          <li
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
          </li>
        </ul>

        <div className="settings-info-contents">
          {activeTab === "tab1" && <MyDetails />}
          {activeTab === "tab2" && <Password />}
          {activeTab === "tab3" && <Plan />}
          {activeTab === "tab4" && <Billing />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
