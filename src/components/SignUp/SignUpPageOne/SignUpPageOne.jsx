import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUpPageOne.css";
import Logo from "../../../assets/images/Logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { registerReq, clearErrors, clearState } from '../../../redux/auth/AuthActions';
import BackdropLoader from '../../Loader/BackdropLoader';
import useAlert from "../../../customHooks/useAlert.js";

const SignUpPageOne = ({ onContinue }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const classesAvailable = ["Primary 5", "Primary 6", "JSS1", "JSS3"];
  const { loading, error, success } = useSelector((state) => state.userRegister);
  const [regData, setRegData] = React.useState({});

  React.useEffect(() => {
    if (error) {
      alert('Error', error, 'error', 'Ok', () => {
        dispatch(clearErrors());
      });
    }
    if (success) {
      alert('Success', "Account created successfully", 'success', 'Continue', () => {
        dispatch(clearState());
        onContinue(regData, 1);
      });
    }
  }, [error, success, onContinue, regData, alert, dispatch]);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    dispatch(registerReq(data));
    setRegData(data);
  };

  return (
    <>
      {loading && <BackdropLoader />}
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
                        value: 6,
                        message: "Your password must exceed 6 characters",
                      }
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
    </>
  );
};

export default SignUpPageOne;
