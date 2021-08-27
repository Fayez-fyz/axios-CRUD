import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProductContext from "./ProductContext";

export default function CreateProduct(props) {
  const [product, SetProduct] = useState("");
  const [price, SetPrice] = useState("");

  const productContext = useContext(ProductContext);
  const history = useHistory();
  const [isLoading, SetLoading] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await axios.post("https://60efffcdf587af00179d3c4b.mockapi.io/products", {
        product,
        price,
      });
      SetLoading(false);
      history.push("/product");
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 class="h3 mb-0 text-gray-800">Create Product</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="col-lg-6">
            <label>Product</label>
            <input
              type="text"
              className="form-control"
              value={product}
              onChange={(e) => {
                SetProduct(e.target.value);
              }}
            />
            <br />
          </div>
          <div className="col-lg-6">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => {
                SetPrice(e.target.value);
              }}
            />
            <br />
          </div>

          <div className="col-lg-12 my-2">
            <input
              type="submit"
              value="Submit"
              className="btn-primary "
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
