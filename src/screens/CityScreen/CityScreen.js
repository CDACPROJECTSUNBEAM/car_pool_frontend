import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./CityScreen.css";
import {
    addCity,
  addState,
  getAllCities,
  getAllStates,
} from "../../actions/adminAuthAction";
import { toast } from "react-toastify";

const CityScreen = () => {
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const data = useSelector((state) => state.userSignin);
  let user = data.response;
  const statesData = useSelector((state) => state.states);
  let states = statesData.response;
  const citiesData = useSelector((state) => state.cities);
  let cities = citiesData.response;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStates());
    dispatch(getAllCities());
  }, []);

  const submitData = async (e) => {
    e.preventDefault();

    let cityDetails = { cityName, stateName };

    dispatch(addCity(cityDetails, toast));

    setCityName("");
    setStateName("");
  };

  return (
    <>
      <UserNavbar user={user} link={"/admin/home"} />

      <div class="container mt-5">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal3"
          className="mb-4 btn btn-primary"
        >
          Add City
        </button>
        <div class="row">
          {cities &&
            cities.map((c) => (
              <div class="col-md-4 col-xl-3">
                <div class="card bg-c-green order-card">
                  <div class="card-block">
                    <h6 class="m-b-20">{c.city}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Profile Modal */}
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={submitData}>

                <div className="row mt-4">
                  <div className="col-md-4 col-sm-12">
                    <p className="publish_ride_labels">City Name:</p>
                  </div>
                  <div className="col-md-8 col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="city"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                  />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-4 col-sm-12">
                    <p className="publish_ride_labels">Destination:</p>
                  </div>
                  <div className="col-md-8 col-sm-12">
                    <div
                      className="dropdown"
                      style={{
                        width: "100%",
                        display: "inline-block",
                        position: "relative",
                      }}
                    >
                      <select
                        name="stateName"
                        className="form-control"
                        id="state-names"
                        style={{ width: "100%", height: "100%" }}
                        onChange={(e) => setStateName(e.target.value)}
                      >
                        {
                            states && states.map(s => (
                                <option value={s.state}>{s.state}</option>
                            ))
                        }
                        
                      </select>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-primary mt-3">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default CityScreen;
