import React from "react";
import { Link } from "react-router-dom";
import "./SignUpPageThree.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageTwo = () => {
  return (
    <div className="signup-pagethree">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="signupcontents">
        <div className="content-One content">
          <img src={LargeLogo} alt="large-assim-logo" />
        </div>

        <div className="content-Two content">
          <h4>Basic Personal Information</h4>

          <div className="form-two">
            <form action="">
              <div>
                <input type="text" placeholder="Gender" />
              </div>
              <div>
                <input type="text" placeholder="Address" />
              </div>
              <div>
                <input type="text" placeholder="State of Origin" />
              </div>
              <div>
                <input type="text" placeholder="Local Government Area" />
              </div>
              <div>
                <input type="text" placeholder="Name of Your School" />
              </div>
              <div>
                <input type="text" placeholder="Number of Subjects Offered" />
              </div>
              <div>
                <Link to="/completeSignUp">
                  <button type="submit">Complete</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageTwo;
