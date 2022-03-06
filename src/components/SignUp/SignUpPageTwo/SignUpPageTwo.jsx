import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignUpPageTwo.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageTwo = () => {
  const schema = yup.object({
    studSchLocation: yup.string().required(),
    studFavSubject: yup.string().required(),
    studLeastFavSubject: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    navigate("/studentSignUpPageThree");
  };

  return (
    <div className="signup-pagetwo">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>
      </div>

      <div className="signupcontents">
        <div className="contentOne content">
          <img src={LargeLogo} alt="large-assim-logo" />
        </div>

        <div className="contentTwo content">
          <h4>Basic School Information</h4>

          <div className="form-two">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register("studSchLocation")}
                  type="text"
                  placeholder="Where do you school?"
                />
              </div>
              <div>
                <input
                  {...register("studFavSubject")}
                  type="text"
                  placeholder="What is your favorite subject?"
                />
              </div>
              <div>
                <input
                  {...register("studLeastFavSubject")}
                  type="text"
                  placeholder="What is your least favorite subject?"
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

export default SignUpPageTwo;
