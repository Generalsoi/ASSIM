import React from "react";
import "./SignUpPageOne.css";
import Logo from "../../../assets/images/Logo.png";

const SignUpPageOne = () => {
  return (
    <div className="signup-pageone">
      <div className="header">
        <a href="/">
          <img src={Logo} alt="assim-logo" />
        </a>

        <p>
          Already have an account?{" "}
          <span>
            <a href="/">Sign In</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPageOne;
