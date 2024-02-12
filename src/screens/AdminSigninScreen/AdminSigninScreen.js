import React, { useEffect, useState } from "react";
import "./AdminSigninScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";
import { signin } from "../../actions/adminAuthAction";
import { useNavigate } from "react-router-dom";

const AdminSigninScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitData = async (e) => {
    e.preventDefault();

    const adminDetails = {
      email,
      password
    }

    dispatch(signin(adminDetails, toast, navigate));
  };

  return (
    <>
      <Header />
      <div class="demo-container">
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-6 col-12 mx-auto">
              <div class="text-center image-size-small position-relative">
                <img
                  src="https://annedece.sirv.com/Images/user-vector.jpg"
                  class="rounded-circle p-2 bg-white"
                />
                <div class="icon-camera">
                  <a href="" class="text-primary">
                    <i class="lni lni-camera"></i>
                  </a>
                </div>
              </div>
              <div class="p-5 bg-white rounded shadow-lg">
                <h3 class="mb-2 text-center pt-5">Welcome Back Admin</h3>
                <form onSubmit={submitData}>
                  <label class="font-500">Email</label>
                  <input
                    name="email"
                    class="form-control form-control-lg mb-3"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label class="font-500">Password</label>
                  <input
                    name="password"
                    class="form-control form-control-lg"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <button type="submit" class="btn btn-primary btn-lg w-100 shadow-lg mt-4">
                    SIGN IN
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSigninScreen;
