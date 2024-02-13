import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { vehicleReducer } from "./vehicleReducer";
import { cityAddReducer, cityReducer } from "./cityReducer";
import { stateAddReducer, stateReducer } from "./stateReducer";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    vehicle: vehicleReducer,
    cities: cityReducer,
    cityAdd: cityAddReducer,
    states: stateReducer,
    stateAdd: stateAddReducer,
})

export default reducers;