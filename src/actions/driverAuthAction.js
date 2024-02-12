import {
    USER_SIGNIN_FAILURE,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
  } from "../constants/authConstants";
    
  export const signin = (userDetails, toast, navigate) => (dispatch) => {
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
        if(data.status === 500 || data.role !== "ROLE_DRIVER"){
          dispatch({
            type: USER_SIGNIN_FAILURE,
            payload: "Invalid Credentials",
            authenticate: false,
          });
          toast.error("Invalid Credentials");
        }else{
          dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data,
            authenticate: true,
          });
          toast.success("Login successful");
          navigate("/driver");
        }
      })
      .catch(error => {
        dispatch({
          type: USER_SIGNIN_FAILURE,
          payload: "Invalid Credentials",
          authenticate: false,
        });
        toast.error("Invalid Credentials");
      });
  };