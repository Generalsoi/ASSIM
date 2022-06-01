import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import Logo from "../../assets/images/Logo.png";

const SignIn = () => {
  const handleSubmit = () => {
    console.log("form submitted");
  };
  return (
    <div className="sign-in-page">
      <div>
        <img src={Logo} alt="assim-logo" />
        <h5>Log in to your account</h5>
        <p>Welcome back! Please enter your details</p>

        <div className="signin-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="........." />
            </div>
            <div>
              <div>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember for 30 days</label>
              </div>

              <a href="">Forgot password</a>
            </div>
            <div>
              <button>Sign in</button>
            </div>
          </form>
        </div>

        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
