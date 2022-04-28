import React from "react";
import "./Plan.css";
import FreePlanIcon from "../../../../../assets/images/freeplanicon.png";
import StandardPlanIcon from "../../../../../assets/images/standardplanicon.png";
import PremiumPlanIcon from "../../../../../assets/images/premiumplanicon.png";

const Plan = () => {
  return (
    <div className="plan">
      <div className="plan-heading">
        <h5>Plan</h5>
        <p>Manage your plans</p>
      </div>

      <div className="plan-content">
        <div>
          <div>
            <img src={FreePlanIcon} alt="" />
          </div>
          <h5>Free Plan</h5>
        </div>
        <div>
          <p>
            <span>$0</span> per month
          </p>
          <p>
            Includes up to 10 courses and access to download only 10 files per
            month.
          </p>
        </div>
      </div>

      <div className="plan-content">
        <div>
          <div>
            <img src={StandardPlanIcon} alt="" />
          </div>
          <h5>Standard Plan</h5>
        </div>
        <div>
          <p>
            <span>$10</span> per month
          </p>
          <p>
            Includes up to 20 courses and access to download 20 courses per
            month
          </p>
        </div>
      </div>

      <div className="plan-content">
        <div>
          <div>
            <img src={PremiumPlanIcon} alt="" />
          </div>
          <h5>Premium Plan</h5>
        </div>
        <div>
          <p>
            <span>$40</span> per month
          </p>
          <p>Unlimited courses and access to download all courses.</p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
