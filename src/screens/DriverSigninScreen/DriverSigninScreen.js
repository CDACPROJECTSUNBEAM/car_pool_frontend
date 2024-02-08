import React, { useState } from "react";
import "./DriverSigninScreen.css";
import { Link } from "react-router-dom";
import login from "../../images/driver_login.jpg";

const DriverSigninScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  return (
    <>
      <div className="card mx-auto register__card">
        <form>
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">
              <img
                src={login}
                className="img-fluid rounded-start login__image"
                alt="signup"
                style={{marginTop: "12%"}}
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card-body">
                <div className="register__head text-center mt-4">
                  Welcome Driver!
                </div>
                <div className="register__para text-center">
                  Login to continue
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="email"
                      className="input__email"
                      placeholder="Enter Email (eg. test@test.com)"
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      type="password"
                      className="input__password"
                      placeholder="Enter Password"
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                      minLength={6}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 register__btn">
                    <button
                      type="submit"
                      className="login__button w-100"
                      value="Login"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12 go__signup">
                    <p className="text-center">
                      Not a Member Yet?
                      <Link to="/driver/signup"> Register Here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DriverSigninScreen;
