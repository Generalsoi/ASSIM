import React from "react";
import { useState } from "react";
import SignUpPageOne from "./SignUpPageOne/SignUpPageOne";
import SignUpPageTwo from "./SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./SignUpPageThree/SignUpPageThree";

import { useDispatch } from 'react-redux';
import { createStudent, login } from '../../redux/auth/AuthActions';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    currentClass: "",
    phone: "",
    email: "",
    password: "",
    school: "",
    favoriteSubject: "",
    leastFavoriteSubject: "",
    gender: "",
    address: "",
    stateOfOrigin: "",
    lga: "",
    noOfSubjects: "",
  });

  const [step, setStep] = useState(1);

  const onContinue = async (input, index) => {
    setData({ ...data, ...input });

    if (index === 3) {
      // submit to server
      dispatch(createStudent(data));

      //login user
      dispatch(login(data));

      // navigate to complete signup page
      setTimeout(() => {
        navigate("/completeSignUp");
      }, 1000);

    }
    setStep(index + 1);
  };

  return (
    <>
      {step === 1 && <SignUpPageOne onContinue={onContinue} />}
      {step === 2 && <SignUpPageTwo onContinue={onContinue} />}
      {step === 3 && <SignUpPageThree onContinue={onContinue} />}
    </>
  );
};

export default Signup;
