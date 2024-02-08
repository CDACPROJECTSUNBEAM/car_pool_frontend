import React from "react";

const EditProfile = () => {
  return (
    <>
      <form>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditProfile;
