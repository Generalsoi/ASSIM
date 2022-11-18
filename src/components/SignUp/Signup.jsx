import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpPageOne from "./SignUpPageOne/SignUpPageOne";
import SignUpPageTwo from "./SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./SignUpPageThree/SignUpPageThree";
import BackdropLoader from '../Loader/BackdropLoader';

import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, clearState, register, createStudent, login } from '../../redux/auth/AuthActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    userId: "",
    token: "",
  });

  const [step, setStep] = useState(1);

  const { loading, error, success } = useSelector((state) => state.userRegister);

  React.useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      dispatch(clearState());
      // login user
      dispatch(login(data.email, data.password));

      // navigate to complete signup page
      setTimeout(() => {
        navigate("/completeSignUp");
      }, 1000);
    }
  }, [success, loading, error, dispatch, navigate, data]);


  const onContinue = async (input, index) => {
    setData({ ...data, ...input });

    if (step === 3) {
      // submit to server
      dispatch(createStudent(data));
    }
    setStep(index + 1);
  };
  console.log(data);


  return (
    <>
      {loading && <BackdropLoader />}
      {step === 1 && <SignUpPageOne onContinue={onContinue} />}
      {step === 2 && <SignUpPageTwo onContinue={onContinue} />}
      {step === 3 && <SignUpPageThree onContinue={onContinue} />}
    </>
  );
};

export default Signup;
