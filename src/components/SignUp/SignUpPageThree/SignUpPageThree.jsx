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
                <select name="gender" id="gender">
                  <option value="gender">Gender</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Address" />
              </div>
              <div>
                <select name="state-of-origin" id="origin">
                  <option value="origin">State of Origin</option>
                </select>
              </div>
              <div>
                <select name="lga" id="lga">
                  <option value="lga">Local Government Area</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="Name of Your School" />
              </div>
              <div>
                <select name="subjects" id="subjects">
                  <option value="subject">No. of subjects offered</option>
                </select>
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
