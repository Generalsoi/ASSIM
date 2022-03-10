import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignUpPageOne.css";
import Logo from "../../../assets/images/Logo.png";
import Arrow from "../../../assets/images/arrowicon.png";
import dataObject from "../data.js";

const SignUpPageOne = ({ onContinue }) => {
  const classesAvailable = ["Primary 5", "Primary 6", "JSS1", "JSS3"];

  const schema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    class: yup.string().required(),
    phoneNumber: yup.number().required().min(11).positive(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    onContinue(data, 1);
    // dataObject.push(data);
    // navigate("/studentSignUpPageTwo");
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("firstname")}
                  type="text"
                  placeholder="First Name"
                  id="studFirstName"
                />
                <input
                  {...register("lastname")}
                  type="text"
                  placeholder="Last Name"
                  id="studLastName"
                />
              </div>
              <div>
                <select {...register("class")} id="class">
                  <option value="">---Select Class---</option>
                  {classesAvailable.map((el) => (
                    <option
                      key={el}
                      value={el}
                      index={classesAvailable.indexOf(el)}
                    >
                      {el}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password"
                />
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
