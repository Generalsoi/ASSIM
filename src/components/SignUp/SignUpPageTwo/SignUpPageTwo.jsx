import React from "react";
import { Link } from "react-router-dom";
import "./SignUpPageTwo.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageTwo = () => {
  return (
    <div className="signup-pagetwo">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="signupconents">
        <div className="contentOne">
          <img src={LargeLogo} alt="large-assim-logo" />
        </div>

        <div className="contentTwo">
          <h4>Basic School Information</h4>

          <div className="form-two">
            <form action="">
              <div>
                <input type="text" placeholder="Where do you school?" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="What is your favorite subject?"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="What is your least favorite subject?"
                />
              </div>
              <div>
                <Link to="/">
                  <button type="submit">Next</button>
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
