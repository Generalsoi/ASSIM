import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./SignUpPageThree.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageThree = ({ onContinue }) => {
  const schema = yup.object({
    studAddress: yup.string().required(),
    studSchoolName: yup.string().required(),
    studGender: yup.string().required(),
    studStateOfOrigin: yup.string().required(),
    studLocalGovtArea: yup.string().required(),
    studSchSubjectsOffered: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    onContinue(data, 3);
    // navigate("/completeSignUp");
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <select {...register("studGender")} id="gender">
                  <option value="gender">Gender</option>
                </select>
              </div>
              <div>
                <input
                  {...register("studAddress")}
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div>
                <select {...register("studStateOfOrigin")} id="origin">
                  <option value="origin">State of Origin</option>
                </select>
              </div>
              <div>
                <select {...register("studLocalGovtArea")} id="lga">
                  <option value="lga">Local Government Area</option>
                </select>
              </div>
              <div>
                <input
                  {...register("studSchoolName")}
                  type="text"
                  placeholder="Name of Your School"
                />
              </div>
              <div>
                <select
                  {...register("studSchSubjectsOffered")}
                  name="subjects"
                  id="subjects"
                >
                  <option value="subject">No. of subjects offered</option>
                </select>
              </div>
              <div>
                <button type="submit">Complete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageThree;
