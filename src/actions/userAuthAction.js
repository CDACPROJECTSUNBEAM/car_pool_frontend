import axios from "axios"
import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/authConstants"

export const signup = (userDetails) => {
    return (dispatch) => {
        dispatch({
            type: USER_SIGNUP_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const body = {
            userDetails,
        }

        const url = '';
        axios.post(url, body, header)
            .then((response) => {
                dispatch({
                    type: USER_SIGNUP_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_SIGNUP_FAILURE,
                    payload: error,
                })
            })
    }
}

export const signin = (userDetails) => {
    return (dispatch) => {
        dispatch({
            type: USER_SIGNIN_REQUEST,
        })

        const header = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const body = {
            userDetails,
        }

        const url = '';
        axios.post(url, body, header)
            .then((response) => {
                dispatch({
                    type: USER_SIGNIN_SUCCESS,
                    payload: response.data,
                })
            })
            .catch((error) => {
                dispatch({
                    type: USER_SIGNIN_FAILURE,
                    payload: error,
                })
            })
    }
}

export const logout = () => {
    return (dispatch) => {
        // localStorage.removeItem('token');
        dispatch({ type: USER_SIGNOUT })
        document.location.href = '/user/signin'
    }
}