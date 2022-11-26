import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userRegisterReducer, userLoginReducer, createStudentReducer } from "./auth/AuthReducers";
const reducer = combineReducers({
  // user reducers
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  createStudent: createStudentReducer,

});

const userTokenFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userData: userTokenFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;