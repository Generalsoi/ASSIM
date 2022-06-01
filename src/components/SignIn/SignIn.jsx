import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignIn.css";
import Logo from "../../assets/images/Logo.png";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  return (
    <div className="sign-in-page">
      <div>
        <img src={Logo} alt="assim-logo" />
        <h5>Log in to your account</h5>
        <p className="info">Welcome back! Please enter your details</p>

        <div className="signin-form">
          <form onSubmit={handleSubmit()}>
            <div className="signin-form-div">
              <label htmlFor="">Email</label>
              <input
                {...register("email", {
                  required: "Please, enter a valid email address",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                placeholder="Enter your email"
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
            <div className="signin-form-div">
              <label htmlFor="password">Password</label>
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
                placeholder="........."
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
            <div className="signin-form-checkbox">
              <div>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember for 30 days</label>
              </div>

              <a href="">Forgot password</a>
            </div>
            <div className="signin-form-btn">
              <button type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <p className="no-account">
          Don't have an account?{" "}
          <span>
            <Link to="/" className="signup">
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
