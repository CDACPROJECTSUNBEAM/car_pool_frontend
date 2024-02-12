import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
})

export default reducers;