import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./ForgotPassword.css";
import Logo from "../../assets/images/Logo.png";

const ForgotPassword = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        criteriaMode: "all",
    });

    const onSubmit = () => {
        Navigate("/dashboard");
    };

    return (
        <div className="sign-in-page">
            <div>
                <img src={Logo} alt="assim-logo" />
                <h5>Forgotten Password?</h5>
                <p className="info">Request Password Reset</p>

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
                        <div className="signin-form-btn">
                            <Link to="/dashboard">
                                <button type="submit">Submit</button>
                            </Link>
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

export default ForgotPassword;
