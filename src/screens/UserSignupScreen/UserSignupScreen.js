import React, { useRef, useState } from "react";
import "./UserSignupScreen.css";
import { Link } from "react-router-dom";
import register from "../../images/register.avif";

const UserSignupScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const ref = useRef();
  return (
    <>
      <div className="card mx-auto register_card">
        <form>
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">
              <img
                src={register}
                className="img-fluid rounded-start signup__image"
                alt="signup"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card-body">
                <div className="register__head text-center">Welcome User!</div>
                <div className="register__para text-center">
                  Register to continue
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Firstname"
                      id="name"
                      name="name"
                      onChange={(e) => setFirstname(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Lastname"
                      id="name"
                      name="name"
                      onChange={(e) => setLastname(e.target.value)}
                      required={true}
                    />
                  </div>
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
                  <div className="col-md-6 col-sm-12">
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
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      type="password"
                      className="input__password"
                      placeholder="Confirm Password"
                      id="cpassword"
                      name="cpassword"
                      onChange={(e) => setCPassword(e.target.value)}
                      required={true}
                      minLength={6}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="number"
                      className="input__email"
                      placeholder="Enter contact number"
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
                      ref={ref}
                      className="input__password"
                      type="text"
                      placeholder="Enter Date of Birth"
                      onFocus={() => (ref.current.type = "date")}
                      onBlur={() => (ref.current.type = "text")}
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                      minLength={6}
                    />
                  </div>
                </div>
                <div className="row fw-bold text-muted mt-4 text-center">
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-3">
                        <label>Gender: </label>
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="gender" value="male" /> Male
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="gender" value="female" />{" "}
                        Female
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="gender" value="other" /> Other
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 register_btn">
                    <button
                      type="submit"
                      className="register_button w-100"
                      value="Register"
                    >
                      Register
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12 go__signup">
                    <p className="text-center">
                      Already a Member?<Link to="/user/signin">Login Here</Link>
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

export default UserSignupScreen;
