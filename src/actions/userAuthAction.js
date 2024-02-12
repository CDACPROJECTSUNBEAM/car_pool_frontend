import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/authConstants";

const url = "http://localhost:8081";

export const signin = (userDetails, toast) => (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  fetch('http://localhost:8081/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 500){
        dispatch({
          type: USER_SIGNIN_FAILURE,
          payload: "Invalid Credentials",
        });
        toast.error("Invalid Credentials");
      }else{
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
        });
        toast.success("Login successful");
      }
    })
    .catch(error => {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: "Invalid Credentials",
      });
      toast.error("Invalid Credentials");
    });
};

export const signup = (userDetails, toast) => (dispatch) => {

  dispatch({
    type: USER_SIGNUP_REQUEST,
  });

  fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data,
      });
      toast.success("Registration successful");
    })
    .catch(error => {
          dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: "Registration error!!",
      });
      toast.error("Registration error");
    });
};

export const logout = () => {
  return (dispatch) => {
    // localStorage.removeItem('token');
    dispatch({ type: USER_SIGNOUT });
    document.location.href = "/user/signin";
  };
};
