import React from "react";
import "./Plan.css";
import FreePlanIcon from "../../../../../assets/images/freeplanicon.png";

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan-heading">
        <h5>Plan</h5>
        <p>Manage your plans</p>
      </div>

      <div className="free-plan">
        <div>
          <div>
            <img src={FreePlanIcon} alt="" />
            <h5>Free Plan</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
