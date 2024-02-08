import axios from "axios"
import { DRIVER_SIGNIN_FAILURE, DRIVER_SIGNIN_REQUEST, DRIVER_SIGNIN_SUCCESS, DRIVER_SIGNOUT, DRIVER_SIGNUP_FAILURE, DRIVER_SIGNUP_REQUEST, DRIVER_SIGNUP_SUCCESS } from "../constants/authConstants"

export const signup = (driverDetails) => {
    return (dispatch) => {
        dispatch({
            type: DRIVER_SIGNUP_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const body = {
            driverDetails,
        }

        const url = '';
        axios.post(url, body, header)
            .then((response) => {
                dispatch({
                    type: DRIVER_SIGNUP_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: DRIVER_SIGNUP_FAILURE,
                    payload: error,
                })
            })
    }
}

export const signin = (driverDetails) => {
    return (dispatch) => {
        dispatch({
            type: DRIVER_SIGNIN_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const body = {
            driverDetails,
        }

        const url = '';
        axios.post(url, body, header)
            .then((response) => {
                dispatch({
                    type: DRIVER_SIGNIN_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: DRIVER_SIGNIN_FAILURE,
                    payload: error,
                })
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        // localStorage.removeItem('token');
        dispatch({ type: DRIVER_SIGNOUT })
        document.location.href = '/driver/signin'
    }
}