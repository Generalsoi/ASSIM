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
    class: "",
    phoneNumber: "",
    email: "",
    password: "",
    school: "",
    favoriteSubject: "",
    leastFavoriteSubject: "",
    address: "",
    school: "",
    gender: "",
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
      const response = await registerStudent(data);
      console.log(response);

      if (response === "200") {
        navigate("/completeSignUp");
      }
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
