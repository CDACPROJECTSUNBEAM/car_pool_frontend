import React, { useState } from "react";
import "./ProfileScreen.css";
import user from "../../images/user.avif";
import EditProfile from "../EditProfile/EditProfile";

const ProfileScreen = () => {
  const [toggle, setToggle] = useState(false);

  const onEditClick = () => {
    setToggle(true);
  };
  return (
    <>
      {!toggle ? (
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div class="card p-4 profile_card">
            <div class="image d-flex flex-column justify-content-center align-items-center profile_img">
              <button class="btn btn-secondary profile_img_btn">
                <img src={user} height="100" width="100" />
              </button>
              <span class="name mt-3">Akshat Shah</span>
              <span class="idd">@1_akshatshah</span>
              <div class=" d-flex mt-2">
                
                  <button class="btn1 btn-dark" onClick={onEditClick}>
                    Edit Profile
                  </button>
                
              </div>
              <div class=" px-2 rounded mt-4 date ">
                {" "}
                <span class="join">Joined Dec,2023</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      ) : (
        <>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label" style={{color: "white"}}>
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label" style={{color: "white"}}>
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label" style={{color: "white"}}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label" style={{color: "white"}}>
            Contact No.
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
