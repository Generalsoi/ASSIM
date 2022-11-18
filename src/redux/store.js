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

const userTokenFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(sessionStorage.getItem("userInfo"))
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