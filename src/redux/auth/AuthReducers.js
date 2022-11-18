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


export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, registerData: action.payload, success: true, message: action.payload.message };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case CLEAR_ERRORS:
      return { error: null, success: null, message: null };
    case CLEAR_STATE:
      return { error: null, success: null, message: null };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userData: action.payload, success: true, message: action.payload.message };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case CLEAR_ERRORS:
      return { error: null, success: null, message: null };
    case CLEAR_STATE:
      return { error: null, success: null, message: null };
    default:
      return state;
  }
};

export const createStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STUDENT_REQUEST:
      return { loading: true };
    case CREATE_STUDENT_SUCCESS:
      return { loading: false, studentData: action.payload, success: true, message: action.payload.message };
    case CREATE_STUDENT_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case CLEAR_ERRORS:
      return { error: null, success: null, message: null };
    case CLEAR_STATE:
      return { error: null, success: null, message: null };
    default:
      return state;
  }
};