import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageThree.css";
import Logo from "../../../assets/images/Logo.png";
import LargeLogo from "../../../assets/images/large-logo.png";

const SignUpPageThree = ({ onContinue }) => {
  // const schema = yup.object({
  //   address: yup.string().required(),
  //   school: yup.string().required(),
  //   gender: yup.string().required(),
  //   stateOfOrigin: yup.string().required(),
  //   lga: yup.string().required(),
  //   noOfSubjects: yup.string(),
  // });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ criteriaMode: "all" });

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
                <select
                  {...register("gender", {
                    required: "Please, select your gender",
                  })}
                  id="gender"
                >
                  <option value="">---Select Gender---</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p
                    className="error"
                    style={{ color: "red", fontSize: "12px", marginTop: "0" }}
                  >
                    {errors.gender.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div>
                <select {...register("stateOfOrigin")} id="origin">
                  <option value="origin">State of Origin</option>
                </select>
              </div>
              <div>
                <select {...register("lga")} id="lga">
                  <option value="lga">Local Government Area</option>
                </select>
              </div>
              <div>
                <input
                  {...register("school")}
                  type="text"
                  placeholder="Name of Your School"
                />
              </div>
              <div>
                <select
                  {...register("noOfSubjects")}
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
