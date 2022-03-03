import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageOne.css";
import Logo from "../../../assets/images/Logo.png";
import Arrow from "../../../assets/images/arrowicon.png";

const SignUpPageOne = () => {
  const { register, handleSubmit } = useForm();

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
                <input
                  {...register("studtFirstName")}
                  type="text"
                  placeholder="First Name"
                  id=""
                />
                <input
                  {...register("studtLastName")}
                  type="text"
                  placeholder="Last Name"
                  id=""
                />
              </div>
              <div>
                <select {...register("studtClass")} id="class">
                  <option value="class">Class</option>
                </select>
              </div>
              <div>
                <input
                  {...register("studtPhoneNo")}
                  type="tel"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <input
                  {...register("studtEmail")}
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  {...register("studtPassword")}
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div>
                <Link to="/studentSignUpPageTwo">
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

export default SignUpPageOne;
