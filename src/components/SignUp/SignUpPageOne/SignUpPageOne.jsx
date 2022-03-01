import React from "react";
import "./SignUpPageOne.css";
import Logo from "../../../assets/images/Logo.png";
import Arrow from "../../../assets/images/arrowicon.png";

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

      <div className="signupcontents">
        <div className="content-one contentone">
          <div>
            <h2>Let's get your</h2>
            <h2>profile ready!</h2>
          </div>

          <div>
            <p>
              By creating an account, I confirm that I have read and understand
            </p>
            <p>
              the
              <span>
                <a href="/">ASSIM Privacy Policy</a>
              </span>
              and
              <span>
                <a href="/">Terms of Use</a>
              </span>
            </p>
          </div>
        </div>

        <div className="signupformone contenttwo">
          <h4>Create Account</h4>
          <p>Let's get started.</p>

          <div className="form-one">
            <form action="">
              <div>
                <input type="text" placeholder="First Name" id="" />
                <input type="text" placeholder="Last Name" id="" />
              </div>
              <div>
                <input type="text" placeholder="class" />
              </div>
              <div>
                <input type="tel" placeholder="Phone number" />
              </div>
              <div>
                <input type="email" placeholder="Email address" />
              </div>
              <div>
                <input type="password" placeholder="Password" />
              </div>

              <div>
                <button type="submit">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageOne;
