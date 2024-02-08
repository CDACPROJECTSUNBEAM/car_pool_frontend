import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { driverSigninReducer, driverSignupReducer } from "./driverAuthReducer";
import { adminReducer } from "./adminAuthReducer";

const reducers = combineReducers({
    admin: adminReducer,
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    driverSignup: driverSignupReducer,
    driverSignin: driverSigninReducer,
})

export default reducers;