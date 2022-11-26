import React from "react";
import { useState } from "react";
import SignUpPageOne from "./SignUpPageOne/SignUpPageOne";
import SignUpPageTwo from "./SignUpPageTwo/SignUpPageTwo";
import SignUpPageThree from "./SignUpPageThree/SignUpPageThree";
import BackdropLoader from '../Loader/BackdropLoader';
import { useDispatch, useSelector, } from 'react-redux';
import { createStudent, login, clearErrors, clearState } from '../../redux/auth/AuthActions';
import { useNavigate } from "react-router-dom";
import useAlert from "../../customHooks/useAlert.js";

const Signup = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading: loadingUserLogin, error: errorUserLogin, success: successUserLogin } = useSelector((state) => state.userLogin);
  const { loading: loadingcreateStudent, error: errorcreateStudent, success: successcreateStudent } = useSelector((state) => state.createStudent);

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
    }
    setStep(index + 1);
  };

  React.useEffect(() => {
    if (errorcreateStudent) {
      if (errorcreateStudent) {
        alert('Error', errorcreateStudent, 'error', 'Ok', () => {
          dispatch(clearErrors());
        });
      }
    }
    if (successcreateStudent) {
      alert('Success', "Account created successfully", 'success', 'Ok', () => {
        dispatch(clearState());
        //login user
        dispatch(login(data));
      });
    }
  }, [errorcreateStudent, successcreateStudent, alert, dispatch, data]);

  React.useEffect(() => {
    if (successUserLogin) {
      navigate('/completeSignUp');
    }
  }, [errorUserLogin, successUserLogin, navigate]);

  return (
    <>
      {loadingUserLogin || loadingcreateStudent ? <BackdropLoader /> : null}
      {step === 1 && <SignUpPageOne onContinue={onContinue} />}
      {step === 2 && <SignUpPageTwo onContinue={onContinue} />}
      {step === 3 && <SignUpPageThree onContinue={onContinue} />}
    </>
  );
};

export default Signup;
