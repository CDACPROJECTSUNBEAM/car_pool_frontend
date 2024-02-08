// import axios from "axios"
// import { ADMIN_SIGNIN_FAILURE, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS, ADMIN_SIGNOUT } from "../constants/authConstants"

// export const signin = (email, password) => {
//     return (dispatch) => {
//         dispatch({
//             type: ADMIN_SIGNIN_REQUEST,
//         })

//         const header = {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }

//         const body = {
//             email,
//             password,
//         }

//         const url = 'http://localhost:9999/api/adminSignin';
//         axios.post(url, body, header)
//             .then((response) => {
//                 dispatch({
//                     type: ADMIN_SIGNIN_SUCCESS,
//                     payload: response.data,
//                 })
//             })
//             .catch((error) => {
//                 dispatch({
//                     type: ADMIN_SIGNIN_FAILURE,
//                     payload: error,
//                 })
//             })
//     }
// }

// export const logout = () => {
//     return (dispatch) => {
//         // localStorage.removeItem('token');
//         dispatch({ type: ADMIN_SIGNOUT })
//         document.location.href = '/admin/signin'
//     }
// }

import axios from "axios"; 
const url = 'http://localhost:9999';

export const loginAdmin = (email, password, toast) => async (dispatch) => {
    try {
        
        dispatch({
            type: "LoginAdminRequest",
        });

        const {
            data
        } = await axios.post(
            url + "/api/adminSignin", {
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        dispatch({
            type: "LoginAdminSuccess",
            payload: data.admin,
            token: data.token,
        });
        toast.success(data.message);
    } catch (error) {
        dispatch({
            type: "LoginAdminFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}

export const logoutAdmin = (toast) => async (dispatch) => {
    try {
        dispatch({
            type: "LogoutAdminRequest",
        });

        await axios.get(url + "/api/adminLogout");

        dispatch({
            type: "LogoutAdminSuccess",
        });
        toast.success("Logged out Successfully");
    } catch (error) {
        dispatch({
            type: "LogoutAdminFailure",
            payload: error.response.data.message,
        });
        toast.error(error.response.data.message);
    }
}