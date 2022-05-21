import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SignUpPageOne from "./SignUpPageOne/SignUpPageOne";
import SignUpPageTwo from "./SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./SignUpPageThree/SignUpPageThree";

import { registerStudent } from "../../services/userService";

const Signup = () => {
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
  const navigate = useNavigate();

  const onContinue = async (input, index) => {
    setData({ ...data, ...input });

    if (step === 3) {
      // submit to server
      try {
        const response = await registerStudent(data);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert("User email already registered");
        }
      }

      navigate("/completeSignUp");
      //   navigate("/completeSignUp");
    }
    setStep(index + 1);
  };
  console.log(data);
  return (
    <>
      {step === 1 && <SignUpPageOne onContinue={onContinue} />}
      {step === 2 && <SignUpPageTwo onContinue={onContinue} />}
      {step === 3 && <SignUpPageThree onContinue={onContinue} />}
    </>
  );
};

export default Signup;
