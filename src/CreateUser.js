import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

export default function CreateUser(props) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [country, SetCountry] = useState("");
  const [phoneno, SetPhoneno] = useState("");
  const history = useHistory();
  const [isLoading, SetLoading] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await axios.post("https://60efffcdf587af00179d3c4b.mockapi.io/users", {
        name,
        email,
        country,
        phoneno,
      });
      SetLoading(false);
      history.push("/user");
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 class="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                SetName(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                SetEmail(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-6">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              value={country}
              onChange={(e) => {
                SetCountry(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-6">
            <label>Phone No</label>
            <input
              type="tel"
              className="form-control"
              value={phoneno}
              onChange={(e) => {
                SetPhoneno(e.target.value);
              }}
            />
            <br />
          </div>

          <div className="col-lg-12 my-2">
            <input
              type="submit"
              value="Submit"
              className="btn-primary mx-auto"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
