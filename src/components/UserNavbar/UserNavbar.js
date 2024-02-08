import React from "react";
import "./UserNavbar.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";

const UserNavbar = (props) => {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light bg-light shadow`}>
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to={props.link}>
            <span className="brand_name">Ride My Way</span>
            <img
              src={logo}
              alt=""
              style={{ width: "7%", height: "7%", marginLeft: "2%" }}
              className="brand_logo"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav">
              <li class="nav-item welcome">
                <h5>
                  Welcome! <span className="text-muted"> {props.user} </span>
                </h5>
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item profile">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Profile
                </button>
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item logout">
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style={{backgroundColor: "black"}}>
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color: "white"}}>
                Profile
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{color: "white"}}
              ></button>
            </div>
            <div class="modal-body">
              <ProfileScreen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
