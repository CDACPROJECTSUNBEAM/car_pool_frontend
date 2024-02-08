import React from "react";
import "./PublishRide.css";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import publishRide from "../../images/publishRide.jpg";

const PublishRide = () => {
  return (
    <>
      <DriverNavbar driver={"Driver"} link={"/driver"} />

      {/* <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <center>
                <h1 style={{ fontSize: "60px" }}>Add Ride Here</h1>
                <br></br>
                <br></br>
                <br></br>
                <table className="table" style={{ height: "500px", width: "1000px" }}>
                    <tbody>
                        <tr>

                            <td>
                                <b style={{ fontSize: "20px" }}>
                                    Start City:
                                </b>
                            </td>
                            <td>
                                <div className="dropdown" style={{ width:"100%" ,display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }}>

                                    <select name="city-names" className="form-control" id="city-names" style={{ width: "100%", height: "100%" }}>
                                        <option value="Pune">Pune</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Solapur">Solapur</option>
                                        <option value="Nagpur">Nagpur</option>
                                        <option value="Nashik">Nashik</option>
                                        <option value="Kolhapur">Kolhapur</option>
                                        <option value="Jalgaon">Jalgaon</option>
                                        <option value="Amravati">Amravati</option>
                                        <option value="Thane">Thane</option>
                                        <option value="Panvel">Panvel</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <b style={{ fontSize: "20px" }}>
                                Destination City:
                            </b>
                            <td>
                                <div className="dropdown" style={{width:"100%" ,display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }}>

                                    <select name="city-names" id="city-names" className="form-control" style={{ width: "100%", height: "100%" }}>
                                        <option value="Pune">Pune</option>
                                        <option value="Mumbai">Mumbai</option>
                                        <option value="Solapur">Solapur</option>
                                        <option value="Nagpur">Nagpur</option>
                                        <option value="Nashik">Nashik</option>
                                        <option value="Kolhapur">Kolhapur</option>
                                        <option value="Jalegaon">Jalegaon</option>
                                        <option value="Amravati">Amravati</option>
                                        <option value="Thane">Thane</option>
                                        <option value="Panvel">Panvel</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td><b style={{ fontSize: "20px" }}>Date of Journey </b> </td>
                            <td>
                                <input type="date" className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} placeholder="Model Name"></input>
                            </td>
                        </tr>
                        <tr>
                            <td> <b style={{ fontSize: "20px" }}> Time of Departure </b></td>
                            <td>
                                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="time" placeholder="RC Number"></input>
                            </td>
                        </tr>
                        <tr>
                            <td><b style={{ fontSize: "20px" }}>Time of Reaching : </b></td>
                            <td>
                                <input className="form-control" type="time" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} placeholder="Year of Registration"></input>
                            </td>
                        </tr>
                        <tr>
                            <td> <b style={{ fontSize: "20px" }}>Select Car : </b> </td>
                            <td>
                                <div className="dropdown" style={{ width:"100%" ,display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }}>

                                    <select name="city-names" className="form-control" id="city-names" style={{ width: "100%", height: "100%" }}>
                                        <option value="Ertiga">Ertiga</option>
                                        <option value="Innova">Innova</option>
                                        <option value="Maruti Swift">Maruti Swift</option>
                                        <option value="Hyundai i20">Hyundai i20</option>
                                        <option value="Wagnar">Wagnar</option>
                                        <option value="Baleno">Baleno</option>
                                        <option value="BMW">BMW</option>
                                        <option value="i10">i10</option>
                                        <option value="Zest">Zest</option>
                                        <option value="Honda city">Honda city</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <br></br>
                    </tbody>
                </table>
            <button className="btn btn-primary btn-lg" style={{width:"80%"}}>Submit</button>
            </center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div> */}

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <center>
              <br></br>
              <h1 style={{ fontSize: "40px" }}>Publish Ride</h1>
            </center>

            {/* <form className="mt-3">
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
                  Publish Ride
                </button>
              </div>
            </form> */}
            <form className="mt-5">
              <div className="row">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Start City:</p>
                </div>
                <div className="col-md-8">
                  <div
                    className="dropdown"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                  >
                    <select
                      name="city-names"
                      className="form-control"
                      id="city-names"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Solapur">Solapur</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Kolhapur">Kolhapur</option>
                      <option value="Jalgaon">Jalgaon</option>
                      <option value="Amravati">Amravati</option>
                      <option value="Thane">Thane</option>
                      <option value="Panvel">Panvel</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Destination:</p>
                </div>
                <div className="col-md-8">
                  <div
                    className="dropdown"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                  >
                    <select
                      name="city-names"
                      className="form-control"
                      id="city-names"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Solapur">Solapur</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Nashik">Nashik</option>
                      <option value="Kolhapur">Kolhapur</option>
                      <option value="Jalgaon">Jalgaon</option>
                      <option value="Amravati">Amravati</option>
                      <option value="Thane">Thane</option>
                      <option value="Panvel">Panvel</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Date of Journey:</p>
                </div>
                <div className="col-md-8">
                <input type="date" className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} placeholder="Model Name" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Departure Time:</p>
                </div>
                <div className="col-md-8">
                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="time" placeholder="RC Number" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Reaching Time:</p>
                </div>
                <div className="col-md-8">
                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="time" placeholder="RC Number" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Select Car:</p>
                </div>
                <div className="col-md-8">
                <div className="dropdown" style={{ width:"100%" ,display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }}>

                                    <select name="city-names" className="form-control" id="city-names" style={{ width: "100%", height: "100%" }}>
                                        <option value="Ertiga">Ertiga</option>
                                        <option value="Innova">Innova</option>
                                        <option value="Maruti Swift">Maruti Swift</option>
                                        <option value="Hyundai i20">Hyundai i20</option>
                                        <option value="Wagnar">Wagnar</option>
                                        <option value="Baleno">Baleno</option>
                                        <option value="BMW">BMW</option>
                                        <option value="i10">i10</option>
                                        <option value="Zest">Zest</option>
                                        <option value="Honda city">Honda city</option>
                                    </select>
                                </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-12">
                <button
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 w-100"
                  type="submit"
                >
                  Publish Ride
                </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-7">
            <img src={publishRide} className="publish_ride_img" />
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

export default PublishRide;
