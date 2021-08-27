import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function EditUser(props) {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [country, SetCountry] = useState("");
  const [phoneno, SetPhoneno] = useState("");
  const history = useHistory();
  const [isLoading, SetLoading] = useState(false);

  useEffect(async () => {
    try {
      let product = await axios.get(
        `https://60efffcdf587af00179d3c4b.mockapi.io/users/${props.match.params.id}`
      );
      SetName(product.data.name);
      SetEmail(product.data.email);
      SetCountry(product.data.country);
      SetPhoneno(product.data.phoneno);
    } catch (error) {
      console.log(error);
    }
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await axios.put(
        `https://60efffcdf587af00179d3c4b.mockapi.io/users/${props.match.params.id}`,
        { name, email, country, phoneno }
      );
      SetLoading(false);
      history.push("/user");
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
    history.push("/user");
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 my-4">
        <h1 class="h3 mb-0 text-gray-800">Edit User</h1>
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
              value="Update"
              className="btn-primary"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
