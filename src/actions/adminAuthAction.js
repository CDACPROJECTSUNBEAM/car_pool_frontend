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