import React from "react";
import "./AddVehicle.css";
import UserFooter from "../../components/UserFooter/UserFooter";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import vehicle from "../../images/vehicle.avif";

const AddVehicle = () => {
  return (
    <>
    <DriverNavbar driver={"Driver"} link={"/driver"} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={vehicle}
              className="add_vehicle_img"
            />
          </div>
          <div className="col-md-6">
            <center>
              <br></br>
              <h1 style={{ fontSize: "50px" }}>Add Vehicle Details</h1>
            </center>
            <br></br>

            <form className="mt-3">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Start location"
                />
                <label for="floatingInput">Car Company</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="End location"
                />
                <label for="floatingInput">Car Model</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Registration Certificate Number"
                />
                <label for="floatingInput">
                  Registration Certificate Number
                </label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Date of Registration"
                />
                <label for="floatingInput">Date of Registration</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Adhar Number"
                />
                <label for="floatingInput">Adhar Card Number</label>
              </div>

              <div class="d-grid">
                <button
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                  type="submit"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <UserFooter />
    </>
  );
};

export default AddVehicle;
