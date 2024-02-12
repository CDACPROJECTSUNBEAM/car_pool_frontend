import React, { useState } from "react";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProfileDetails } from "../../actions/userAuthAction";


const ProfileScreen = () => {
  const [toggle, setToggle] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState();
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const data = useSelector(state => state.userSignin);
  let user = data.response;

  const onEditClick = () => {
    setToggle(true);
  };

  const dispatch = useDispatch();

  const updateProfile = (e) => {
    const updateDetails = {
      id: user.id,
      fname,
      lname,
      email,
      password: user.password,
      contact,
      gender,
      role: user.role,
      dob,
      address
    }

    dispatch(updateProfileDetails(updateDetails, toast));
  }

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
                  <span class="text-muted">{user.email}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Contact -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">{user.contact}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Gender -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">{user.gender}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Birth date -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">{user.dob}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                  Address -
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <span class="text-muted">{user.address}</span>
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
        <form onSubmit={updateProfile}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="fname"
            value={user.fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="lname"
            value={user.lname}
            onChange={(e) => setLname(e.target.value)}
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
            name="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Contact No.
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="contact"
            value={user.contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="gender"
            value={user.gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Birth date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="dob"
            value={user.dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="address"
            value={user.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
        </form>
      </>
      )}
    </>
  );
};

export default ProfileScreen;
