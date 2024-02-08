import { DRIVER_SIGNIN_FAILURE, DRIVER_SIGNIN_REQUEST, DRIVER_SIGNIN_SUCCESS, DRIVER_SIGNOUT, DRIVER_SIGNUP_FAILURE, DRIVER_SIGNUP_REQUEST, DRIVER_SIGNUP_SUCCESS,  } from "../constants/authConstants";

export const driverSignupReducer = (state = {}, action) => {
    switch(action.type) {
        case DRIVER_SIGNUP_REQUEST: 
            return {loading: true};
        case DRIVER_SIGNUP_SUCCESS: 
            return {loading: false, response: action.payload};
        case DRIVER_SIGNUP_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const driverSigninReducer = (state = {}, action) => {
    switch(action.type) {
        case DRIVER_SIGNIN_REQUEST: 
            return {loading: true};
        case DRIVER_SIGNIN_SUCCESS: 
            return {loading: false, response: action.payload};
        case DRIVER_SIGNIN_FAILURE: 
            return {loading: false, error: action.payload};
        case DRIVER_SIGNOUT:
                return {};
        default:
            return state;
    }
}