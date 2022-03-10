import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignUpPageTwo.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageTwo = ({ onContinue }) => {
  const schema = yup.object({
    school: yup.string().required(),
    favoriteSubject: yup.string().required(),
    leastFavoriteSubject: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    onContinue(data, 2);
    // navigate("/studentSignUpPageThree");
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
                  {...register("school")}
                  type="text"
                  placeholder="Where do you school?"
                />
              </div>
              <div>
                <input
                  {...register("favoriteSubject")}
                  type="text"
                  placeholder="What is your favorite subject?"
                />
              </div>
              <div>
                <input
                  {...register("leastFavoriteSubject")}
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
