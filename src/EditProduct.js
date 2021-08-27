import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function EditProduct(props) {
  const [product, SetProduct] = useState("");
  const [price, SetPrice] = useState("");
  const history = useHistory();
  const [isLoading, SetLoading] = useState(false);

  useEffect(async () => {
    try {
      let product = await axios.get(
        `https://60efffcdf587af00179d3c4b.mockapi.io/products/${props.match.params.id}`
      );
      SetProduct(product.data.product);
      SetPrice(product.data.price);
    } catch (error) {
      console.log(error);
    }
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      SetLoading(true);
      await axios.put(
        `https://60efffcdf587af00179d3c4b.mockapi.io/products/${props.match.params.id}`,
        { product, price }
      );
      SetLoading(false);
      history.push("/product");
    } catch (error) {
      console.log(error);
      SetLoading(false);
    }
    history.push("/product");
  };
  return (
    <div>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 my-4">
        <h1 class="h3 mb-0 text-gray-800">Edit Product</h1>
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
            <br/>
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
            <br/>
          </div>

          <div className="col-lg-12 my-2">
            <input
              type="submit"
              value="Update"
              className="btn-primary "
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
