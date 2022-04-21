import React from "react";
import "./Content.css";
import StudDashboard from "../StudDashboard/StudDashboard";
import Classes from "../Classes/Classes";
import StudentDashboardHeader from "./../../../../common/StudentDashboardHeader/StudentDashboardHeader";
import Documents from "../Documents/Documents";
import Achievements from "../Achievements/Achievements";

const Content = (props) => {
  const { activeMenu } = props;
  return (
    <div>
      {activeMenu === "menu1" && <StudDashboard />}
      {activeMenu === "menu2" && <Classes />}
      {activeMenu === "menu3" && <Documents />}
      {activeMenu === "menu5" && <Achievements />}
      {/* <Routes>
        <Route path="/studDashboard" element={<StudDashboard />} />
        <Route path="/classes" element={<Classes />} />
      </Routes> */}
    </div>
  );
};

export default Content;
