import React, { useState } from "react";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const [toggle, setToggle] = useState(false);

  const onEditClick = () => {
    setToggle(true);
  };
  return (
    <>
      {!toggle ? (
        <div class="container mt-4 mb-4 d-flex justify-content-center">
          <div class="card p-4 profile_card">
            <div class="image  profile_img">
  
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    Email -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">akshat@gmail.com</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Contact -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">9131236003</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Gender -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">male</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Birth date -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">2001-10-22</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Address -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">Burhanpur, M.P</span>
                  </div>
                </div>
              </span>

              <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                <button class="btn1 btn-dark" onClick={onEditClick}>
                    Edit Profile
                  </button>
                </div>
                <div className="col-md-6 col-sm-12">
                <span class="join">Joined Dec,2023</span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : (
        <>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Contact No.
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Gender
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Birth date
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="button" onClick={() => setToggle(false)} className="btn btn-primary">
          Save Changes
        </button>
      </>
      )}
    </>
  );
};

export default ProfileScreen;
