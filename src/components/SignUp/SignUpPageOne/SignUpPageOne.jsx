import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageOne.css";
import Logo from "../../../assets/images/Logo.png";

const SignUpPageOne = ({ onContinue }) => {
  const classesAvailable = ["Primary 5", "Primary 6", "JSS1", "JSS3"];

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  // const schema = yup.object({
  //   firstname: yup.string().required(),
  //   lastname: yup.string().required(),
  //   class: yup.string().required(),
  //   phoneNumber: yup.number().required().min(11).positive(),
  //   email: yup.string().email().required(),
  //   password: yup.string().required().min(6),
  // });

  const onSubmit = (data) => {
    onContinue(data, 1);
    // dataObject.push(data);
    // navigate("/studentSignUpPageTwo");
  };

  return (
    <div className="signup-pageone">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="assim-logo" />
        </Link>

        <p>
          Already have an account?{" "}
          <span>
            <Link to="/sign-in">Sign In</Link>
          </span>
        </p>
      </div>

      <div className="signupcontents">
        <div className="content-one contentone">
          <div className="get-your-profile-ready">
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
              <div className="form-one-div">
                <div>
                  <input
                    {...register("firstname", {
                      required: "Please enter your name",
                      minLength: {
                        value: 1,
                        message: "Your name must exceed 1 characters",
                      },
                    })}
                    type="text"
                    placeholder="First Name"
                    id="studFirstName"
                  />
                  {errors.firstname && (
                    <p
                      className="error"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "0",
                        marginBottom: "0",
                      }}
                    >
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("lastname", {
                      required: "Please enter your name",
                      minLength: {
                        value: 1,
                        message: "Your name must exceed 1 characters",
                      },
                    })}
                    type="text"
                    placeholder="Last Name"
                    id="studLastName"
                  />
                  {errors.lastname && (
                    <p
                      className="error"
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginTop: "0",
                        marginBottom: "0",
                      }}
                    >
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="form-one-div">
                <select
                  {...register("currentClass", {
                    required: "Please select your class",
                  })}
                  id="class"
                >
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
                {errors.currentClass && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0.5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.currentClass.message}
                  </p>
                )}
              </div>

              <div className="form-one-div">
                <input
                  {...register("phone", {
                    required: "Please, enter your phone number",
                  })}
                  type="tel"
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0.5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="form-one-div">
                <input
                  {...register("email", {
                    required: "Please, enter a valid email address",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                  type="email"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0.5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="form-one-div">
                <input
                  {...register("password", {
                    required: "Please enter your password",
                    minLength: {
                      value: 8,
                      message: "Your password must exceed 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d](?=.*?[#?!.,@$%^&*-]).{8,}$/,
                      message:
                        "Your password must include at least one lowercase letter, one uppercase letter, one number and one special character",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                />
                {errors.password && (
                  <p
                    className="error"
                    style={{
                      color: "red",
                      fontSize: "12px",
                      marginTop: "0.5px",
                      marginBottom: "0",
                    }}
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="form-one-div">
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
