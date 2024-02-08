import React, { useEffect, useState } from 'react';
import "./AdminSigninScreen.css";
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '../../actions/adminAuthAction';
import { toast } from "react-toastify";

const AdminSigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const adminDetails = useSelector((state) => state.admin);
  const {loading, isAdminAuthenticated} = adminDetails;
  const dispatch = useDispatch();

  const submitData = async (e) => {
    e.preventDefault();
    console.log(email + ' ' + password);
    await dispatch(loginAdmin(email, password, toast));
    console.log("Admin - " + isAdminAuthenticated)
    //let adminData = JSON.stringify(adminDetails)
    if(isAdminAuthenticated){
      var tokenReceived = adminDetails.loginToken;
      window.sessionStorage.setItem("loginToken", tokenReceived);
    }
  }
  
  return (
    <>
      {/* <div className="container mt-5">
        <form onSubmit={submitData}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='test@test.com' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='********' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>Submit</button>
        </form>
      </div> */}

<div class="demo-container">
  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-6 col-12 mx-auto">
        <div class="text-center image-size-small position-relative">
        <img src="https://annedece.sirv.com/Images/user-vector.jpg" class="rounded-circle p-2 bg-white" />
        <div class="icon-camera">
        <a href="" class="text-primary"><i class="lni lni-camera"></i></a>
        </div>
        </div>
        <div class="p-5 bg-white rounded shadow-lg">
          <h3 class="mb-2 text-center pt-5">Welcome Back Admin</h3>
          <form>
            <label class="font-500">Email</label>
            <input name="" class="form-control form-control-lg mb-3" type="email" />
             <label class="font-500">Password</label>
            <input name="" class="form-control form-control-lg" type="password" />
            <button class="btn btn-primary btn-lg w-100 shadow-lg mt-4">SIGN IN</button>
          </form>       
        </div>        
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default AdminSigninScreen;