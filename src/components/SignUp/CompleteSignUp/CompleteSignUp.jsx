import React from "react";
import { Link } from "react-router-dom";
import "./CompleteSignUp.css";
import Logo from "../../../assets/images/Logo.png";
import LargerLogo from "../../../assets/images/LargerLogo.png";

const CompleteSignUp = () => {
  return (
    <div className="complete-signup">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="completed-signup-contents">
        <img src={LargerLogo} alt="assim-logo" />
        <h2>Congratulations!</h2>
        <p className="first-p">You have completed your ASSIM application</p>

        <p className="second-p">
          Your request is being reviewed and will be processed within 2–3
        </p>
        <p className="second-p">
          working days. Your account will get running upon approval.{" "}
        </p>

        <div className="completed-signup-btn">
          <Link to="/dashboard">
            <button>Go to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompleteSignUp;
