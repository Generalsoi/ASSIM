import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  CREATE_STUDENT_FAIL,
  USER_LOGOUT,
  CLEAR_ERRORS,
  CLEAR_STATE,
} from "./AuthTypes";
import axios from "axios";
import { accessToken, apiEndpoint } from "../../config";

export const registerReq = (body) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${apiEndpoint}users?access_token=${accessToken}`, body, config);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};

export const createStudent = (body) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_STUDENT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        AUTHORIZATION: `Bearer ${body.token}`,
      },
    };

    const { data } = await axios.post(`${apiEndpoint}students`, body, config);

    dispatch({
      type: CREATE_STUDENT_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: CREATE_STUDENT_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};

export const login = (body) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`${apiEndpoint}auth?access_token=${accessToken}`, body, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
    });
  }
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("userToken");
  dispatch({ type: USER_LOGOUT });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const clearState = () => async (dispatch) => {
  dispatch({ type: CLEAR_STATE });
};