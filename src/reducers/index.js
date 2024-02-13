import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { vehicleReducer } from "./vehicleReducer";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    vehicle: vehicleReducer,
})

export default reducers;