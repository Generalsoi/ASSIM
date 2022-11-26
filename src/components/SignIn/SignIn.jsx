import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignIn.css";
import Logo from "../../assets/images/Logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { login, clearErrors } from '../../redux/auth/AuthActions';
import useAlert from "../../customHooks/useAlert.js";
import { useEffect } from "react";
import BackdropLoader from '../Loader/BackdropLoader';

const SignIn = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading: loadingUserLogin, error: errorUserLogin, success: successUserLogin, userData } = useSelector((state) => state.userLogin);
  console.log(userData, 'userData');
  let profileType = userData?.user?.profileType;
  useEffect(() => {
    if (errorUserLogin) {
      alert('Error', errorUserLogin, 'error', 'Ok', () => {
        dispatch(clearErrors());
      });
    }
    if (successUserLogin) {
      if (profileType === 'student') {
        alert('Success', "Login successful", 'success', 'Ok', () => {
          window.location.href = "/dashboard";
        });
      }
      if (profileType === 'teacher') {
        alert('Error', "You are not a student", 'error', 'Ok', () => {
          dispatch(clearErrors());
          localStorage.clear();
        });
      }

    }
  }, [errorUserLogin, successUserLogin, alert, dispatch, navigate, profileType]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = async (data) => {
    dispatch(login(data));
  };

  return (
    <>
      {loadingUserLogin && <BackdropLoader />}
      <div className="sign-in-page">
        <div>
          <img src={Logo} alt="assim-logo" />
          <h5>Log in to your account</h5>
          <p className="info">Welcome back! Please enter your details</p>

          <div className="signin-form">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  name="email"
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
                    required: "Please enter your password"
                  })}
                  type="password"
                  placeholder="........."
                  name="password"
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

                <a href="/forgot-password">Forgot password</a>
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
    </>
  );
};

export default SignIn;
